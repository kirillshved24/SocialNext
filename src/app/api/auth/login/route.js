import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import connectDB from '@/lib/db';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email и пароль обязательны' }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: 'Неправильный email или пароль' }, { status: 401 });
    }

    const token = generateToken({ id: user._id, username: user.username, email: user.email, isAdmin: user.isAdmin });
    const response = NextResponse.json({ token, user: { id: user._id, username: user.username, email: user.email, isAdmin: user.isAdmin } }, { status: 200 });
    response.cookies.set('authorization', `Bearer ${token}`, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка авторизации', details: error.message }, { status: 500 });
  }
}