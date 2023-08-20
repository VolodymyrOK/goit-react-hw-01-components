import { FriendItem, Status, Avatar, Name } from './Friendlist.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <Status $isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
