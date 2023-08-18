import { ProfileUser } from './ProfileUser/ProfileUser';
import { Statistics } from './Statistics/Statistics';
import { Friendlist } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
