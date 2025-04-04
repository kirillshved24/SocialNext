import { NextResponse } from 'next/server';
import Friend from '@/models/Friend';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/db';

export async function GET(req) {
  try {
    await connectDB();
    const token = req.cookies.get('authorization')?.value?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Токен авторизации обязателен' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    const friends = await Friend.find({ userId: decoded.id }).populate('friendId', 'username email');
    return NextResponse.json(friends, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка получения друзей', details: error.message }, { status: 401 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const token = req.cookies.get('authorization')?.value?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Токен авторизации обязателен' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    const { friendId } = await req.json();

    if (!friendId) {
      return NextResponse.json({ error: 'friendId обязателен' }, { status: 400 });
    }

    const newFriend = new Friend({ userId: decoded.id, friendId });
    await newFriend.save();
    return NextResponse.json(newFriend, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка добавления друга', details: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const token = req.cookies.get('authorization')?.value?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Токен авторизации обязателен' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    const { userId, friendId } = await req.json();

    await Friend.deleteOne({ userId: decoded.id, friendId });
    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка удаления друга', details: error.message }, { status: 500 });
  }
}