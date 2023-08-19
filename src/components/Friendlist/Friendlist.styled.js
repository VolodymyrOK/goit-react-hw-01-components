import styled from 'styled-components';

export const getStatusColor = ({ isOnline, theme: { colors } }) =>
  isOnline ? colors.friendOnlineTrue : colors.friendOnlineFalse;

export const FriendList = styled.ul`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: start;
  padding: 18px;
  width: 380px;
  height: 100px;
  background-color: ${props => props.theme.colors.friendMainFonColor};
  box-shadow: 5px 6px 12px 0px rgba(165, 165, 165, 1);
  -webkit-box-shadow: 5px 6px 12px 0px rgba(165, 165, 165, 1);
  -moz-box-shadow: 5px 6px 12px 0px rgba(165, 165, 165, 1);
  border-radius: 8px;
`;

export const Status = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${getStatusColor};
`;

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  background-color: #cbc8b9;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: ${props => props.theme.colors.friendTextColor};
`;
