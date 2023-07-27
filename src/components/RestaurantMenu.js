import { useState, useContext } from "react";
import Rating from "./Rating";
import ShimmerUI from "./Shimmer";
import styles from '../styles/restaurantMenu.module.scss';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { UserContext } from "../utils/UserContext";

const RestaurantMenu =()=>{
  const {resId} = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const {loggedInUser} = useContext(UserContext)
  if(restaurantInfo === null) return(<ShimmerUI/>);

  const isVisible = (index)=>{
    if(showIndex !== index){
      setShowIndex(index)
    }else{
      setShowIndex(null)
    }
    
  }
  const {name, cuisines, costForTwoMessage, avgRating} = restaurantInfo?.data?.cards[0]?.card?.card?.info
  const{cards} = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories = cards.filter(
    (cat) => cat.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <main className="xl:container mx-auto">
      <div className="flex flex-wrap border-b justify-between items-center px-4 py-2 mb-8">
        <div>
          <h2 className="text-black-500 font-semibold text-md">{name}</h2>
          <p className="text-sm text-gray-500">{loggedInUser}</p>
          <p className="text-sm text-gray-500">{cuisines.join(', ')}</p>
          <p className="text-sm text-gray-500">{costForTwoMessage}</p>
        </div>
        <span className={styles.rating}><Rating rating={avgRating}/></span>
      </div>

      {/* categories section */}
      {categories?.map((item, index)=>(
        <RestaurantCategories key={item?.card?.card?.title} 
          data={item?.card?.card} 
          showItem={index === showIndex ? true :  false}
          setShowIndex= {()=>isVisible(index)}
        />
      ))}
      
    </main>
  )
}
export default RestaurantMenu;