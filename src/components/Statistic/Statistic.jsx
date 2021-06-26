import css from './Statistic.module.css';
import StatisticItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistic = ({ title, data }) => {
  return (
    <section className={css.statistic}>
      {title.trim() ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.statList}>
        {data.map(item => {
          return <StatisticItem key={item.id} dataItem={item} />;
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistic;
