'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFriendToServer } from '@/redux/slices/authSlice';
import { Container } from '@/ui/Container';
import { Button } from '@/ui/Button';
import { Title } from '@/ui/Typo';
import * as SC from './styles';

export const fetchUsers = async (currentUser) => {
  try {
    const response = await fetch(`/api/users?currentUser=${currentUser}`);
    if (!response.ok) throw new Error('Ошибка при загрузке пользователей');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке пользователей:', error);
    throw error;
  }
};

export const FriendsPage = () => {
  const [availableFriends, setAvailableFriends] = useState([]);
  const { currentUser, friends } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUsers = async () => {
      if (currentUser) {
        try {
          const users = await fetchUsers(currentUser.username);
          setAvailableFriends(users.filter((user) => !friends.some((f) => f.friendId === user._id)));
        } catch (error) {
          console.error('Ошибка при загрузке пользователей:', error);
        }
      }
    };
    loadUsers();
  }, [currentUser, friends]);

  const handleAddFriend = (friendId) => {
    if (currentUser) {
      dispatch(addFriendToServer({ friendId }))
        .unwrap()
        .then(() => setAvailableFriends(availableFriends.filter((f) => f._id !== friendId)))
        .catch((error) => console.error('Ошибка при добавлении друга:', error));
    }
  };

  return (
    <Container>
      <SC.FriendsBlock>
        <Title>Доступные друзья</Title>
        <SC.FriendsList>
          {availableFriends.length > 0 ? (
            availableFriends.map((friend) => (
              <SC.FriendItem key={friend._id}>
                {friend.username} ({friend.email})
                <Button onClick={() => handleAddFriend(friend._id)}>Добавить</Button>
              </SC.FriendItem>
            ))
          ) : (
            <SC.NoFriendsMessage>Нет доступных друзей.</SC.NoFriendsMessage>
          )}
        </SC.FriendsList>
      </SC.FriendsBlock>
    </Container>
  );
};