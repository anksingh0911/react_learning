import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import SlickSlider from "./TopSlider";
import FoodVeritiesSlider from './FoodVeritiesSlider';

const Body = () => {

  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allData,  setAllData]= useState();
  const [searchInput, setSearchInput] = useState();
  const {setUserName} = useContext(UserContext);
  

  console.log(allRestaurant, filteredRestaurant, 'filteredRestaurant')
  const filterData = (restaurantList, searchInput) => {
    console.log(restaurantList, 'restaurantList')
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.213261018493895&lng=72.66344391551915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllData(json?.data)
  };
  const topBannerSlider = allData?.cards[1]?.card?.card?.imageGridCards?.infoWithStyle?.restaurants;
  const heh = allData?.cards[0]?.card?.card;

  if (!allRestaurant) return null;
  if (filteredRestaurant?.length === 0) return <ShimmerUI />;

  return filteredRestaurant?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="xl:container container mx-auto p-5 justify-center">
      <div className='p-2'>
        <h4 className='text-2xl font-bold mb-2'>Best offers for you</h4>
        {/* <SlickSlider data= {topBannerSlider}/> */}
      </div>

      {/* <div className='p-2'>
        <h4 className='text-2xl font-bold mb-2'>{heh?.header?.title}</h4>
        <FoodVeritiesSlider data= {heh?.imageGridCards?.info}/> 
      </div> */}

      <div className="bg-gray-200 search mx-2 p-2 flex justify-end items-center rounded-md">
        <input
          className="border border-solid border-black p-1 rounded-md"
          type="text"
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
      <div className="xl:container mx-auto flex flex-wrap justify-start">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            className="w-3/12 p-2 mb-4"
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
