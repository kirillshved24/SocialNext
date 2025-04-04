'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends, removeFriendFromServer } from '@/redux/slices/authSlice';
import { Button } from '@/ui/Button';
import { Title } from '@/ui/Typo';
import * as SC from './styles';

export const MyFriends = () => {
  const { currentUser, friends } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchFriends(currentUser.id));
    }
  }, [currentUser, dispatch]);

  const handleRemoveFriend = (friendId) => {
    if (currentUser) {
      dispatch(removeFriendFromServer({ userId: currentUser.id, friendId }));
    }
  };

  return (
    <SC.FriendsBlock>
      <Title>Ваши друзья</Title>
      <SC.FriendsList>
        {Array.isArray(friends) && friends.length > 0 ? (
          friends.map((friend) => (
            <SC.FriendItem key={friend.friendId}>
              {friend.friendId.username}
              <Button onClick={() => handleRemoveFriend(friend.friendId)}>Удалить</Button>
            </SC.FriendItem>
          ))
        ) : (
          <SC.NoFriendsMessage>У вас нет друзей.</SC.NoFriendsMessage>
        )}
      </SC.FriendsList>
    </SC.FriendsBlock>
  );
};