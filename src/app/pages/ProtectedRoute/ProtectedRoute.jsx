'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  if (adminOnly && !isAdmin) {
    router.push('/');
    return null;
  }

  return children;
};