'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { isAuthenticated, isAdmin } = useSelector(state => state.auth);
    const router = useRouter();

    if (!isAuthenticated) {
        router.push('/login'); // Перенаправление на страницу входа
        return null;
    }

    if (adminOnly && !isAdmin) {
        router.push('/'); // Перенаправление на главную страницу
        return null;
    }

    return children;
};