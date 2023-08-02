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
    deliveryTime,
    sla
  } = resData?.info
  return(
    <div className="p-2 mb-4 shadow-lg rounded-lg h-[100%]">
        <img 
          className="rounded-md mb-1"
          src={ CDN_URL + cloudinaryImageId } alt="Logo"
        />
        <h4 className="font-semibold text-sm mb-1">{name}</h4>
        <p className="text-xs text-gray-500 mb-2">{cuisines.join(', ')}</p>
        <p className="flex justify-between text-xs">
          <Rating rating = {avgRating}/>
          <span className="font-semibold text-gray-700">{costForTwo}</span>
          <span className="font-semibold text-gray-700">{sla?.deliveryTime} minutes</span>
        </p>
    </div>
  )
}

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <>
        <label className="absolute bg-gray-500 mt-0 px-2 py-1 text-white text-xs rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}
