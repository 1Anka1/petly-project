import styled from 'styled-components';

export const FriendsWrapper = styled.li`
  width: 395px;
  background-color: var(--light-color);
  border-radius: 40px;
`;

export const FriendTitle = styled.h3`
  color: var(--primary-color);
  padding-top: 16px;
  text-align: center;
  font-size: 20px;
  text-decoration: underline;
`;

export const FriendDetails = styled.div`
  display: flex;
  gap: 25px;
  padding: 16px;
`;

export const FriendImg = styled.img`
  width: 80px;
  height: 100px;
  border-radius: 5px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 16px;
  overflow-wrap: anywhere;
`;

export const Underline = styled.p`
  text-decoration: underline;
`;
