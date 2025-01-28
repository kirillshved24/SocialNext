import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://kirillshved96:hsX2bhLX1uR9M8yf@socialnext.5uzui.mongodb.net/?retryWrites=true&w=majority&appName=SocialNext';

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

    // Специфическая обработка для ENODATA
    if (error.code === 'ENODATA') {
      console.error(
        'Ошибка DNS. Проверьте строку подключения (MONGO_URI) и убедитесь, что ваш кластер MongoDB доступен. Если используется MongoDB Atlas, убедитесь, что вы указали правильный "cluster-url".'
      );
    }

    throw error;
  }
};

export default connectDB;