import css from './Profile.module.css';
import toLocale from 'utils/locales';
import PropTypes from 'prop-types';
import defaultAvatar from './default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const isHasAvatar = avatar.trim() !== '' ? avatar : defaultAvatar;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={isHasAvatar}
          alt="Аватар пользователя"
          className={css.avatar}
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{toLocale(stats.views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

Profile.defaultProps = {
  avatar: defaultAvatar,
  location: 'Not indicated',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

export default Profile;
