import {
  Wrapper,
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

export const ProfileUser = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
