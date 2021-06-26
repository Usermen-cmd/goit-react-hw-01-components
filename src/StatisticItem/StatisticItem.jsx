import css from './StatisticItem.module.css';
import getColor from '../utils/randomColor';
import PropTypes from 'prop-types';

const StatisticItem = ({ data }) => {
  return (
    <ul className={css.statList}>
      {data.map(el => (
        <li
          className={css.item}
          key={el.id}
          style={{
            backgroundColor: `rgb(${getColor()})`,
          }}
        >
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticItem;
