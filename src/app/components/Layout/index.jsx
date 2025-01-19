'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { logout } from '@/redux/slices/authSlice';
import { Container } from '@/ui/Container';
import { Button } from '@/ui/Button';
import { TitleManager } from '@/app/components/Layout/TitleManager';
import * as SC from './styles';

export const AppLayout = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Container>
      <TitleManager routes={[]} /> {/* Передайте пустой массив или настройте routes */}
      <SC.Menu>
        {currentUser ? (
          <>
            <SC.MenuItem to="/">Главная</SC.MenuItem>
            <SC.MenuItem to="/posts">Посты</SC.MenuItem>
            <SC.MenuItem to="/friends">Друзья</SC.MenuItem>
            <Button onClick={handleLogout}>Выйти</Button>
          </>
        ) : (
          <>
            <SC.MenuItem to="/login">Вход</SC.MenuItem>
            <SC.MenuItem to="/register">Регистрация</SC.MenuItem>
          </>
        )}
      </SC.Menu>
      <Outlet />
    </Container>
  );
};