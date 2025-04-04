import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'my_secret_key'; // Значение по умолчанию только для разработки

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw { message: 'Недействительный или истекший токен', details: err.message };
  }
};