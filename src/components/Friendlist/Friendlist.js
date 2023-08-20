import { FriendListItem } from './FriendListItem';
import { FriendList } from './Friendlist.styled';

export const Friendlist = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendList>
  );
};
