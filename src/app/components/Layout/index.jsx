'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation'; 
import { Container } from '@/ui/Container';
import { Button } from '@/ui/Button';
import { TitleManager } from '@/app/components/Layout/TitleManager';
import * as SC from './styles';

export const AppLayout = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter(); 

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); 
  };

  return (
    <Container>
      <TitleManager routes={[]} /> 
      <SC.Menu>
        {currentUser ? (
          <>
            <SC.MenuItem onClick={() => router.push('/')}>Главная</SC.MenuItem>
            <SC.MenuItem onClick={() => router.push('/posts')}>Посты</SC.MenuItem>
            <SC.MenuItem onClick={() => router.push('/friends')}>Друзья</SC.MenuItem>
            <Button onClick={handleLogout}>Выйти</Button>
          </>
        ) : (
          <>
            <SC.MenuItem onClick={() => router.push('/login')}>Вход</SC.MenuItem>
            <SC.MenuItem onClick={() => router.push('/register')}>Регистрация</SC.MenuItem>
          </>
        )}
      </SC.Menu>
      {children} 
    </Container>
  );
};