import css from './StatisticItem.module.css';
import getColor from 'utils/randomColor';
import PropTypes from 'prop-types';

const StatisticItem = ({ dataItem }) => {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: `rgb(${getColor()})`,
      }}
    >
      <span className={css.label}>{dataItem.label}</span>
      <span className={css.percentage}>{dataItem.percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  dataItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticItem;
