import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body =()=>{
  const [listOfRestaurant, setListOfRestaurant] = useState(resList)
  return(
    <div className="body">
      
      <div className="search">
       <button
        onClick={()=>{
          const filteredList = listOfRestaurant.filter((res)=> res?.data?.avgRating > 4)
          setListOfRestaurant(filteredList)
        }}
       >
        Filter above 4 rating
      </button>
      </div>
      <div className="res-container">
       {listOfRestaurant.map((restaurant)=>(
          <RestaurantCard key={restaurant?.data?.id} resData = {restaurant}/>
       ))}
      </div>
    </div>
  )
}
export default Body;