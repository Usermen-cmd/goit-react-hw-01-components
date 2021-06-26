import Profile from 'components/Profile/Profile';
import userData from 'data/userData/user';
import Statistic from 'components/Statistic/Statistic';
import statisticData from 'data/statisticData/statistical-data';
import FriendList from 'components/FriendList/FriendList';
import friendsData from 'data/friendsData/friends';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import TrasactionHistory from 'data/transactionHistory/transactions';

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
      <TransactionTable transactions={TrasactionHistory} />
    </>
  );
};

export default App;
