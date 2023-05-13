import { CDN_URL } from "../utils/constant";

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
    <div className="res-card">
        <img 
      className="res-logo"
      src={ CDN_URL + cloudinaryImageId } alt="Logo"
      />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>₹{costForTwo/100} For Two</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
  )
}
export default RestaurantCard;