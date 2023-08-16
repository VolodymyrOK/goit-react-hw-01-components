export const ProfileUser = ({ item }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={item.avatar} alt="item avatar" class="avatar" />
        <p class="name">{item.itemname}</p>
        <p class="tag">{item.tag}</p>
        <p class="location">{item.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{item.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{item.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{item.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
