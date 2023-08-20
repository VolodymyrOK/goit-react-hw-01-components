import { ProfileUser } from './ProfileUser/ProfileUser';
import { Statistics } from './Statistics/Statistics';
import { Friendlist } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import PropTypes from 'prop-types';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../styles/Layout';

export const App = () => {
  return (
    <Layout>
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
      <GlobalStyle />
    </Layout>
  );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

Statistics.propTypes = {
  stats: PropTypes.array,
};

Friendlist.propTypes = {
  friends: PropTypes.array,
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
