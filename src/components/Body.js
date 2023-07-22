import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import ShimmerUI from "./Shimmer";

const Body = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState();

  const filterData = (restaurantList, searchInput) => {
    return restaurantList.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  };

  if(!allRestaurant) return null;
  if(filteredRestaurant?.length === 0 ) return (<ShimmerUI />)
  return filteredRestaurant?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
      <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(allRestaurant, searchInput);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res?.data?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Filter above 4 rating
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link  key={restaurant?.data?.id} 
            to={"/restaurants/" + restaurant?.data?.id}>
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
