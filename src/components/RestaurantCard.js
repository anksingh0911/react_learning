import { CDN_URL } from "../utils/constant";
// import styles from '../styles/restaurantCard.module.scss';
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
    <div className="w-[250px] p-2 mb-4 rounded-md">
        <img 
          className="rounded-md mb-1"
          src={ CDN_URL + cloudinaryImageId } alt="Logo"
        />
        <h4 className="font-semibold text-sm mb-1">{name}</h4>
        <p className="text-xs text-gray-500 mb-2">{cuisines.join(', ')}</p>
        <p className="flex justify-between text-xs">
          <Rating rating = {avgRating}/>
          <span className="font-semibold text-gray-700">₹{costForTwo/100} For Two</span>
          <span className="font-semibold text-gray-700">{deliveryTime} minutes</span>
        </p>
    </div>
  )
}
export default RestaurantCard;