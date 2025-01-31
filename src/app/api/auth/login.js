import { NextResponse } from 'next/server';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import connectDB from '@/lib/db';

export async function POST(req) {
  try {
    await connectDB();
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Имя пользователя и пароль обязательны' }, { status: 400 });
    }

    // Поиск пользователя в базе
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Неправильное имя пользователя или пароль' }, { status: 401 });
    }

    // Генерация токена
    const token = generateToken({ id: user._id, username: user.username, isAdmin: user.isAdmin });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка авторизации', details: error.message }, { status: 500 });
  }
}