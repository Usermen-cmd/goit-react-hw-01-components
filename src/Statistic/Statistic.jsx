import css from './Statistic.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistic = ({ title, data }) => {
  const defaultTitle = title.trim() ? title : Statistic.defaultProps.title;
  return (
    <section className={css.statistic}>
      <h2 className={css.title}>{defaultTitle}</h2>
      <StatisticItem data={data} />
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Statistic.defaultProps = {
  title: 'Upload stats',
};

export default Statistic;
