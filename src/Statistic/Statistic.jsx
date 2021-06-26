import css from './Statistic.module.css';
import StatisticItem from 'StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistic = ({ title, data }) => {
  return (
    <section className={css.statistic}>
      {title.trim() ? <h2 className={css.title}>{title}</h2> : ''}
      <StatisticItem data={data} />
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistic;
