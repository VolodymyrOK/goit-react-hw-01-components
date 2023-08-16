import { ProfileUser } from './ProfileUser';
import { Statistics } from './Statistics';
import { Friendlist } from './Friendlist';
import { TransactionHistory } from './TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <ProfileUser item={user} />
      <Statistics title="Upload stats" items={data} />
      <Friendlist title="Upload stats" items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
