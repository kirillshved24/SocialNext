import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import connectDB from '@/lib/db';

// Метод POST для входа пользователя
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Имя пользователя и пароль обязательны' }), {
        status: 400,
      });
    }

    const user = await User.findOne({ username, password });
    if (!user) {
      return new Response(JSON.stringify({ error: 'Неправильное имя пользователя или пароль' }), {
        status: 401,
      });
    }

    const token = generateToken({ id: user._id, username: user.username, isAdmin: user.isAdmin });
    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Ошибка авторизации', details: error.message }),
      { status: 500 }
    );
  }
}