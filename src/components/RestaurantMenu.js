import { useEffect, useState } from "react";
import Rating from "./Rating";
import ShimmerUI from "./Shimmer";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import styles from '../styles/restaurantMenu.module.scss';
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =()=>{

  const {resId} = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if(restaurantInfo === null) return(<ShimmerUI/>)
  const {name, cuisines, costForTwoMessage, avgRating} = restaurantInfo?.data?.cards[0]?.card?.card?.info
  const{cards} = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  
  return (
    <main>
      <div className={styles.resInfoWrapper}>
        <h2 className={styles.resName}>{name}</h2>
        <p className={styles.cuisines}>{cuisines.join(', ')}</p>
        <p className={styles.costForTwo}>{costForTwoMessage}</p>
        <span className={styles.rating}><Rating rating={avgRating}/></span>
      </div>
      {cards?.map((item, index)=>(
          <div className={styles.menuCategoryWrapper} key={index}>
            <h3>{item?.card?.card?.title} ({item?.card?.card?.itemCards?.length || item?.card?.card?.carousel?.length })</h3>
            {item?.card?.card?.itemCards?.length && (
              <>
                {item?.card?.card?.itemCards?.map((item)=>(
                  <div className={styles.menuWrapper} key={item?.card?.info?.id}>
                    <div>
                      <span className={styles.ribbonText}>{item?.card?.info?.ribbon?.text}</span>
                      <h5 className={styles.menuName}>{item?.card?.info?.name}</h5>
                      <span className={styles.menuPrice}> <MdOutlineCurrencyRupee/> {item?.card?.info?.price / 100}</span>
                      <p className={styles.menuDescription}>{item?.card?.info?.description}</p>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId}/>
                  </div>
                ))}
              </>
            )}
          </div>
      ))}
      
    </main>
  )
}
export default RestaurantMenu;