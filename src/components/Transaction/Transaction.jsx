import css from './Transaction.module.css';
import PropTypes from 'prop-types';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
