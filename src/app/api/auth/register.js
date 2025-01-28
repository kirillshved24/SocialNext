import User from '@/models/User';
import connectDB from '@/lib/db'; // Импортируем connectDB

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Метод ${req.method} не поддерживается` });
  }

  try {
    // Подключаемся к базе данных
    await connectDB();

    const { username, password, email, isAdmin } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ error: 'Все поля обязательны' });
    }

    const newUser = new User({ username, password, email, isAdmin });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при регистрации', details: error.message });
  }
}
