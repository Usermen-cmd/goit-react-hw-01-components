import css from 'Friend/Friend.module.css';
import { BsFillCircleFill } from 'react-icons/bs';
import defaultAvatar from './default.jpg';

const Friend = ({ avatar, name, isOnline }) => {
  const status = { color: `${isOnline ? 'green' : 'red'}` };
  const hasAvatar = avatar.trim() ? true : false;
  return (
    <li className={css.item}>
      <span className={css.status}>
        <BsFillCircleFill style={status} />
      </span>
      <img
        className={css.avatar}
        src={hasAvatar ? avatar : Friend.defaultProps.avatar}
        alt={name}
        width="48px"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.defaultProps = {
  avatar: defaultAvatar,
};

export default Friend;
