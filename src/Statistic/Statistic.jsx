import css from './Statistic.module.css';
import StatisticItem from '../StatisticItem/StatisticItem';

const Statistic = ({ title, data }) => {
  return (
    <section className={css.statistic}>
      <h2 className={css.title}>{title}</h2>
      <StatisticItem data={data} />
    </section>
  );
};

export default Statistic;
