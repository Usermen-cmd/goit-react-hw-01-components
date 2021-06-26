import css from './StatisticItem.module.css';

const StatisticItem = ({ data }) => {
  return (
    <ul className={css.statList}>
      {data.map(el => (
        <li className={css.item} key={el.id}>
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default StatisticItem;
