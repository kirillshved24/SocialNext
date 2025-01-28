import Friend from '@/models/Friend';
import { verifyToken } from '@/lib/auth';
import connectDB from '@/lib/db';

// Метод GET для получения списка друзей
export async function GET(req) {
  try {
    await connectDB();

    const { authorization } = req.headers;
    if (!authorization) {
      return new Response(JSON.stringify({ error: 'Токен авторизации обязателен' }), { status: 401 });
    }

    const token = authorization.split(' ')[1];
    const decoded = verifyToken(token);

    const friends = await Friend.find({ userId: decoded.id }).populate('friendId');
    return new Response(JSON.stringify(friends), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Ошибка получения друзей', details: error.message }),
      { status: 401 }
    );
  }
}

// Метод POST для добавления нового друга
export async function POST(req) {
  try {
    await connectDB();

    const { authorization } = req.headers;
    if (!authorization) {
      return new Response(JSON.stringify({ error: 'Токен авторизации обязателен' }), { status: 401 });
    }

    const token = authorization.split(' ')[1];
    const decoded = verifyToken(token);

    const body = await req.json();
    const { friendId } = body;

    if (!friendId) {
      return new Response(JSON.stringify({ error: 'friendId обязателен' }), { status: 400 });
    }

    const newFriend = new Friend({ userId: decoded.id, friendId });
    await newFriend.save();
    return new Response(JSON.stringify(newFriend), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Ошибка добавления друга', details: error.message }),
      { status: 500 }
    );
  }
}