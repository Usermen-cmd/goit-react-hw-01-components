import Profile from './Profile/Profile';
import user from './user/user';
import Statistic from './Statistic/Statistic';
import statisticData from './statisticData/statistical-data';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" data={statisticData} />
    </>
  );
};

export default App;
