import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/db';

export async function POST(req) {
  try {
    await connectDB();
    const { username, password, email } = await req.json();

    if (!username || !password || !email) {
      return NextResponse.json({ error: 'Все поля обязательны' }, { status: 400 });
    }

    // Проверка, существует ли пользователь с таким email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email уже используется' }, { status: 409 });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();

    return NextResponse.json({ message: 'Пользователь зарегистрирован' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при регистрации', details: error.message }, { status: 500 });
  }
}