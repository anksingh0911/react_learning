import {GrStar} from 'react-icons/gr';
import styles from '../styles/rating.module.scss';

const Rating = (props)=>{
  const {rating} =props;

  return(
    <span className={rating<4 ? styles.warning : rating<3 ? styles.danger :rating==='--' ? styles.secondary : styles.success}>
      <GrStar className={styles.icon}/>{rating}
    </span>
  )
}
export default Rating;