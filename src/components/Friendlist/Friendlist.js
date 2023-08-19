import {
  FriendList,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './Friendlist.styled';

export const Friendlist = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
};
