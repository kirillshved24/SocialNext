import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Утилита для получения токена из куки
const getTokenFromCookie = () => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith('authorization='))
    ?.split('=')[1]
    ?.replace('Bearer ', '');
};

const initialState = {
  currentUser: null,
  isAdmin: false,
  isAuthenticated: false,
  friends: [],
  status: 'idle',
  error: null,
};

// Логин пользователя
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      const { token, user } = response.data; // Ожидаем, что сервер вернет user
      document.cookie = `authorization=Bearer ${token}; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`;
      return { ...user, token }; // Возвращаем данные пользователя и токен
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Регистрация пользователя
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ username, password, email }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', { username, password, email });
      const { token, user } = response.data;
      document.cookie = `authorization=Bearer ${token}; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`;
      return { ...user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Получение списка друзей
export const fetchFriends = createAsyncThunk(
  'auth/fetchFriends',
  async (userId, { rejectWithValue }) => {
    try {
      const token = getTokenFromCookie();
      if (!token) throw new Error('Нет доступа: пользователь не авторизован');
      const response = await axios.get('/api/friends', {
        params: { userId },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Добавление друга
export const addFriendToServer = createAsyncThunk(
  'auth/addFriendToServer',
  async ({ friendId }, { rejectWithValue }) => {
    try {
      const token = getTokenFromCookie();
      if (!token) throw new Error('Нет доступа: пользователь не авторизован');
      const response = await axios.post('/api/friends', { friendId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Удаление друга
export const removeFriendFromServer = createAsyncThunk(
  'auth/removeFriendFromServer',
  async ({ userId, friendId }, { rejectWithValue }) => {
    try {
      const token = getTokenFromCookie();
      if (!token) throw new Error('Нет доступа: пользователь не авторизован');
      await axios.delete('/api/friends', {
        data: { userId, friendId },
        headers: { Authorization: `Bearer ${token}` },
      });
      return { userId, friendId };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, email, id, isAdmin, token } = action.payload;
      state.currentUser = { username, email, id };
      state.isAdmin = isAdmin;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAdmin = false;
      state.isAuthenticated = false;
      state.friends = [];
      document.cookie = 'authorization=; Max-Age=0';
    },
  },
  extraReducers: (builder) => {
    builder
      // Логин
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        state.isAdmin = action.payload.isAdmin || false;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Регистрация
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        state.isAdmin = action.payload.isAdmin || false;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Друзья
      .addCase(fetchFriends.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends = action.payload;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addFriendToServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFriendToServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends.push(action.payload);
      })
      .addCase(addFriendToServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFriendFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFriendFromServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.friends = state.friends.filter(
          (friend) => friend.friendId !== action.payload.friendId
        );
      })
      .addCase(removeFriendFromServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;