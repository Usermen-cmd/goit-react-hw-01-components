import Profile from 'Profile/Profile';
import userData from 'user/user';
import Statistic from 'Statistic/Statistic';
import statisticData from 'statisticData/statistical-data';
import FriendList from 'FriendList/FriendList';
import friendsData from 'friends/friends';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistic title="Upload stats" data={statisticData} />
      <FriendList friends={friendsData} />
    </>
  );
};

export default App;
