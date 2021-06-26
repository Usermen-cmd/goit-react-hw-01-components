import Friend from 'Friend/Friend';
import css from 'FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul>
        {friends.map(el => {
          return (
            <Friend
              key={el.id}
              avatar={el.avatar}
              name={el.name}
              isOnline={el.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
