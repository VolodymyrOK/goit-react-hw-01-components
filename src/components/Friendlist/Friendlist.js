import { FriendListItem } from './FriendListItem';
import { FriendList } from './Friendlist.styled';
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
