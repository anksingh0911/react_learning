import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import SlickSlider from "./TopSlider";
import FoodVeritiesSlider from './FoodVeritiesSlider';
import TopRestaurant from "./TopRestaurant";

const Body = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allData,  setAllData]= useState();
  const [searchInput, setSearchInput] = useState();
  const {setUserName} = useContext(UserContext);

  const filterData = (restaurantList, searchInput) => {
    return restaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const PromotedRestaurant = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllData(json?.data)
  };
  
  const topRestaurant = allData?.cards[1]?.card?.card;
  const foodTypes = allData?.cards[0]?.card?.card;
  console.log(allData, 'types')
  if (!allRestaurant) return null;
  if (filteredRestaurant?.length === 0) return <ShimmerUI />;

  return filteredRestaurant?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="xl:container container mx-auto p-5 justify-center">
      <div className='p-2'>
        <FoodVeritiesSlider data= {foodTypes?.imageGridCards?.info} title={foodTypes?.header?.title}/> 
      </div>
      <TopRestaurant data={topRestaurant} title={topRestaurant?.header?.title}/>
      <div className="bg-gray-200 search mx-2 p-2 flex justify-end items-center rounded-md">
        <input
          className="border border-solid border-black p-1 rounded-md"
          type="text"
          data-testid = "searchInput"
          placeholder="Search"
          onChange={(e) =>setSearchInput(e.target.value)}
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
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>

        <input
          className="border border-solid border-black p-1 rounded-md"
          type="text"
          placeholder="Logged in user name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="xl:container mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            className="col-span-2 md:col-span-2 lg:col-span-1 p-2 mb-4"
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.data?.promoted === false ? 
            (
            <PromotedRestaurant resData={restaurant}/>
            ) : (
            <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
