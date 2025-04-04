import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://kirillshved96:hsX2bhLX1uR9M8yf@socialnext.5uzui.mongodb.net/?retryWrites=true&w=majority&appName=SocialNext';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('Используется существующее подключение к MongoDB');
    return;
  }

  try {
    const connection = await mongoose.connect(MONGO_URI);
    isConnected = !!connection.connections[0].readyState;
    console.log('Подключено к MongoDB');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
    throw new Error('Не удалось подключиться к базе данных');
  }
};

export default connectDB;