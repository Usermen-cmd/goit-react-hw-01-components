import Transaction from 'components/Transaction/Transaction';
import css from './TransactionTable.module.css';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headers}>
        <tr>
          <th className={css.headerItem}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => {
          return (
            <Transaction
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionTable;
