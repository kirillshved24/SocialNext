import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    currentUser: null,
    isAdmin: false,
    isAuthenticated: false,
    friends: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
};

// Логин пользователя
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/auth/login', { username, password });
            const { token } = response.data;

            console.log('Токен после логина:', token); // <-- добавили лог

            localStorage.setItem('token', token);

            const userData = JSON.parse(atob(token.split('.')[1]));
            return { ...userData, token };
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
            const { token } = response.data;

            localStorage.setItem('token', token);
            const userData = JSON.parse(atob(token.split('.')[1]));

            return { ...userData, token };
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
            const response = await axios.get('/api/friends', { params: { userId } });
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
            const token = localStorage.getItem('token'); // Получаем токен
            console.log('Токен перед отправкой запроса:', token); // <-- добавили лог

            if (!token) throw new Error('Токен не найден');

            const response = await axios.post(
                '/api/friends',
                { friendId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

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
            await axios.delete('/api/friends', { data: { userId, friendId } });
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

            localStorage.setItem('token', token); 
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.currentUser = null;
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.friends = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // fetchFriends
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
            // addFriendToServer
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
            // removeFriendFromServer
            .addCase(removeFriendFromServer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeFriendFromServer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.friends = state.friends.filter(
                    (friend) => friend.id !== action.payload.friendId
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