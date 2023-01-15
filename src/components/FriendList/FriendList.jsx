import PropTypes from 'prop-types';
import styles from "./friendList.module.css"
import {FriendListItem} from "./FriendListItem/FriendListItem"

export const FriendList = ({friends})=>{
   
    const elements = friends.map(({id,name,avatar,isOnline})=> 
    <FriendListItem key={id} name={name} avatar= {avatar} 
    isOnline={isOnline}/>)
    return(
        <ul className={styles.list}>
  {elements}
</ul>
    )
}

FriendList.defaultProps = {
    friends: [],
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
      ),
  };
