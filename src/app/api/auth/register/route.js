import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User'; // Предполагается, что у вас есть модель User
import  connectDB from '@/lib/db.js'; 
import jwt from 'jsonwebtoken'; // Для генерации токена

export async function POST(req) {
  try {
    await connectDB();
    const { username, password, email } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email уже используется' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, username, email, isAdmin: false },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ token, user: { id: newUser._id, username, email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}