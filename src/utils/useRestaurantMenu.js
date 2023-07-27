import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId)=>{
  
  const [resInfo, setResInfo]= useState(null);
  useEffect(()=>{
    fetchMenu()
  },[])
  
  const fetchMenu = async()=>{
    const data = await fetch(MENU_URL + resId  + '&catalog_qa=undefined&submitAction=ENTER')
      const json = await data.json();
      setResInfo(json);
  }
  return resInfo;

}
export default useRestaurantMenu;