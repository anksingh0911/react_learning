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
    <div className="body p-5">
      <div className="search p-2">
      <input
        className="border border-solid border-black p-1 rounded-md"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
        className="px-4 py-1 bg-green-500 m-2 rounded-md"
          onClick={() => {
            const data = filterData(allRestaurant, searchInput);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
        <button
        className="px-4 py-1 bg-gray-300 m-2 border rounded-md"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res?.data?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-start">
        {filteredRestaurant.map((restaurant) => (
          <Link  key={restaurant?.data?.id} 
          className="shadow-lg rounded-lg p-2 mx-1 mb-4"
            to={"/restaurants/" + restaurant?.data?.id}>
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
