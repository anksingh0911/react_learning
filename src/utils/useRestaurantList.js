import { useEffect, useState } from "react";

const useRestaurantList =()=>{
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  useEffect(()=>{
     getRestaurant()
  },[]);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  };

  return [allRestaurant, filteredRestaurant];
}
export default useRestaurantList;