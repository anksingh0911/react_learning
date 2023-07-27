import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategories =(props)=>{
  const {data,showItem, setShowIndex, toggle} = props;
  const handleClick =()=>{
    setShowIndex()
  }

  return (
    <div className="w-8/12 mx-auto bg-gray-50 mb-4 shadow-md p-3">
       {/* header */}
      <div className="flex justify-between items-center hover:cursor-pointer" 
        onClick={()=>handleClick()}
      >
        <p className="font-semibold text-md mb-0">{data?.title} ({data?.itemCards?.length})</p>
        <MdKeyboardArrowDown/>
      </div>
      {/* body */}
      {showItem && (
        <ItemList items = {data?.itemCards}/>
      )}
      
    </div>
)};
export default RestaurantCategories;
