import { CDN_URL } from "../utils/constant";
import styles from '../styles/restaurantCard.module.scss';
import Rating from "./Rating";
const RestaurantCard = (props)=>{
  const {resData} = props;
  const {
    name,
    cloudinaryImageId,
    address,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime
  } = resData?.data
  return(
    <div className={styles.restaurantCardWrapper}>
        <img 
          className={styles.logo}
          src={ CDN_URL + cloudinaryImageId } alt="Logo"
        />
        <h4>{name}</h4>
        <p>{cuisines.join(', ')}</p>
        <p className={styles.rcdt}>
          <Rating rating = {avgRating}/>
          <span>₹{costForTwo/100} For Two</span>
          <span>{deliveryTime} minutes</span>
        </p>
    </div>
  )
}
export default RestaurantCard;