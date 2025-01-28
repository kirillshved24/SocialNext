import User from '@/models/User';
import { generateToken } from '@/lib/auth';
import connectDB from '@/lib/db';

// Обработчик POST-запросов для регистрации пользователя
export async function POST(req) {
  try {
    await connectDB();

    const { username, password, email } = await req.json();

    if (!username || !password || !email) {
      return new Response(
        JSON.stringify({ error: 'Все поля обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Проверяем, существует ли пользователь с таким же username или email
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'Пользователь с таким username или email уже существует' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Создаём нового пользователя
    const newUser = new User({ username, password, email });
    await newUser.save();

    // Генерируем JWT
    const token = generateToken({ id: newUser._id, username: newUser.username });

    // Устанавливаем куки с токеном
    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `authorization=Bearer ${token}; HttpOnly; Path=/; Max-Age=3600;`
    );
    headers.append('Content-Type', 'application/json');

    // Отправляем успешный ответ
    return new Response(JSON.stringify(newUser), { status: 201, headers });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Ошибка при регистрации', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Обработчик GET-запросов для получения списка пользователей
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const currentUser = searchParams.get('currentUser');

    if (!currentUser) {
      return new Response(
        JSON.stringify({ error: 'currentUser не указан' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Находим всех пользователей, кроме текущего
    const users = await User.find({ username: { $ne: currentUser } });

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Ошибка при загрузке пользователей', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Обработчик OPTIONS-запросов
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'GET, POST, OPTIONS',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}