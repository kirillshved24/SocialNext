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

// Добавление друга на сервер
export const addFriendToServer = createAsyncThunk(
    'auth/addFriendToServer',
    async ({ userId, friendId }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3001/friends', { userId, friendId });
            return response.data;
        } catch (error) {
            console.error('Ошибка добавления друга на сервере:', error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Удаление друга с сервера
export const removeFriendFromServer = createAsyncThunk(
    'auth/removeFriendFromServer',
    async ({ userId, friendId }, { rejectWithValue }) => {
        try {
            await axios.delete('http://localhost:3001/friends', { data: { userId, friendId } });
            return { userId, friendId };
        } catch (error) {
            console.error('Ошибка удаления друга с сервера:', error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Получение списка друзей
export const fetchFriends = createAsyncThunk(
    'auth/fetchFriends',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get('/friends', { params: { userId } });
            return response.data;
        } catch (error) {
            console.error('Ошибка получения списка друзей:', error);
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, email, id, isAdmin } = action.payload;
            state.currentUser = { username, email, id };
            state.isAdmin = isAdmin;
            state.isAuthenticated = true;
        },
        logout: (state) => {
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