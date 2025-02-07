import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import connectDB from '@/lib/db';

export async function POST(req) {
  try {
    await connectDB();
    const { username, password, email } = await req.json();

    if (!username || !password || !email) {
      return NextResponse.json({ error: 'Все поля обязательны' }, { status: 400 });
    }

    // Проверка на существующего пользователя
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email уже используется' }, { status: 409 });
    }

    // Хэширование пароля
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создание нового пользователя
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();

    // Генерация JWT
    const token = generateToken({ id: newUser._id, username: newUser.username, isAdmin: newUser.isAdmin });

    // Сохранение токена в cookies
    const response = NextResponse.json({ message: 'Пользователь зарегистрирован' }, { status: 201 });
    response.cookies.set('authorization', `Bearer ${token}`, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при регистрации', details: error.message }, { status: 500 });
  }
}