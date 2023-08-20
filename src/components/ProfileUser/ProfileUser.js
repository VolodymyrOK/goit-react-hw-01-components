import {
  Profile,
  Description,
  Avatar,
  Name,
  TagAndLocation,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './ProfileUser.styled';
import PropTypes from 'prop-types';

export const ProfileUser = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <TagAndLocation>{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Profile>
  );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
