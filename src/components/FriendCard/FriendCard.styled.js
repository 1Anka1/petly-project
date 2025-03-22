import styled from 'styled-components';

export const FriendsWrapper = styled.div`
  background-color: var(--light-color);
  border-radius: 40px;
`;

export const FriendTitle = styled.h3`
  padding-top: 16px;
  text-align: center;
  font-size: 20px;
`;

export const FriendDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 16px;
`;

export const FriendImg = styled.img`
  border-radius: 5px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 16px;
`;

export const FriendsItem = styled.li`
  overflow: hidden;
`;
