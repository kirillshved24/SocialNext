'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@/ui/Container';
import { Title } from '@/ui/Typo';
import * as SC from './styles';
import { MyFriends } from '@/app/pages/FriendsPage/components/MyFriends';

export const HomePage = () => {
  const posts = useSelector((state) => state.posts?.posts || []);
  const { currentUser, isAdmin, friends } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isFriend = (postAuthor) => {
    return friends.some((friend) => friend.friendId.username === postAuthor.username);
  };

  const visiblePosts = posts.filter((post) => {
    const postAuthor = post.author;
    return post.isPublic || isFriend(postAuthor) || isAdmin;
  });

  return (
    <Container>
      <Title>Добро пожаловать на главную страницу!</Title>
      {currentUser && (
        <SC.UserInfo>
          <SC.UserIcon />
          <SC.UserDetails>
            <p>{currentUser.email} ({isAdmin ? 'Администратор' : 'Пользователь'})</p>
          </SC.UserDetails>
        </SC.UserInfo>
      )}
      <SC.ContentWrapper>
        <MyFriends />
        {/* PostFriends пока не исправлен, так как его кода нет */}
      </SC.ContentWrapper>
    </Container>
  );
};