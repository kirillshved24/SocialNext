'use client';

import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ProtectedRoute } from '@/app/pages/ProtectedRoute/ProtectedRoute.jsx';
import { AppLayout } from '@/app/components/Layout/index.jsx';
import { Loader } from '@/ui/Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/index.jsx').then((module) => ({ default: module.HomePage })));
const Login = lazy(() => import('../components/Login/index.jsx').then((module) => ({ default: module.Login })));
const Register = lazy(() => import('../components/Register/Register.jsx').then((module) => ({ default: module.Register })));
const PostsPage = lazy(() => import('../pages/PostPage/index.jsx').then((module) => ({ default: module.PostsPage })));
const FriendsPage = lazy(() => import('../pages/FriendsPage/index.jsx').then((module) => ({ default: module.FriendsPage })));

const Router = dynamic(() => import('react-router-dom').then((mod) => mod.createBrowserRouter), {
  ssr: false, 
});

const router = Router([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    title: 'Главная страница',
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
    title: 'Страница авторизации',
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
    title: 'Страница для регистрации',
  },
  {
    path: '/posts',
    element: (
      <Suspense fallback={<Loader />}>
        <ProtectedRoute>
          <PostsPage />
        </ProtectedRoute>
      </Suspense>
    ),
    title: 'Это страница для постов',
  },
  {
    path: '/friends',
    element: (
      <Suspense fallback={<Loader />}>
        <ProtectedRoute>
          <FriendsPage />
        </ProtectedRoute>
      </Suspense>
    ),
    title: 'Страница друзей',
  },
]);

export default router;