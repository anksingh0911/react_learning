import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = ()=>{
  const dispatch = useDispatch();
  const cartItems = useSelector((store)=>store.cart.items);
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return(
    <>
    <h1 className="font-bold text-xl text-center">Cart Items ({cartItems?.length} items)</h1>
    <div className="w-6/12 mx-auto bg-gray-100 p-5 mt-2 rounded-md">
      {cartItems?.length === 0 ? 
      <h1 className="font-bold text-xl text-center">No Items found!!! Please add items into your cart</h1> :
      <ItemList items={cartItems}/>
    }
      
      <button className="bg-orange-300 rounded-md px-3 py-2 text-md text-white"
        onClick={()=>handleClearCart()}
      >
        Clear Cart
      </button>
    </div>
    </>
  )

}
export default Cart;