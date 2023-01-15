import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const fullClassName = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={fullClassName}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
