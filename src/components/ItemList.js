import { MdCurrencyRupee } from "react-icons/md";
import { CDN_URL } from "../utils/constant";

const ItemList = (props)=>{
const {items} = props;
  return (
    <>
      {items?.map(item =>(
        <div key={item?.card?.info?.id} className="flex flex-wrap justify-between bg-white my-2 p-3 shadow-sm">
          <div className="w-10/12">
            <p className="font-semibold text-sm text-black text-bold rounded-sm">{item?.card?.info?.name}</p>
            <span className="flex items-center text-xs text-gray-500">
              <MdCurrencyRupee/>{item?.card?.info?.defaultPrice ?  item?.card?.info?.defaultPrice/ 100 : item?.card?.info?.price / 100}
            </span>
            <p className="text-xs text-gray-500">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 p-3 flex justify-center relative"> 
            <img className="w-[100%] rounded-lg" src={CDN_URL + item?.card?.info?.imageId}/>
            <button className="absolute bottom-0 w-[80%] bg-white shadow-lg text-sm text-gray-600 rounded-lg py-1 px-4">
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
export default ItemList;