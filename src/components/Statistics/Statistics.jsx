import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
