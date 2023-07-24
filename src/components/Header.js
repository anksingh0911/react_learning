import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
  const [btnName , setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus()
  return(
    <div className="header flex p-1 mb-4 justify-between items-center shadow-lg">
      <img 
      className="w-32 h-16"
      src={LOGO_URL} alt="Logo"
      />
      <div className="nav-wrapper">
        <ul className="flex m-1 p-1">
          <li className="px-2">
            Online Status  : {onlineStatus === true ? 'Online': "Offline"}
          </li>
          <li className="px-2">
            <Link to='/'> Home</Link>
          </li>
          <li className="px-2">
            <Link to='/about'> About</Link>
          </li>
          <li className="px-2">
            <Link to='/services'>Services</Link> 
          </li>
          <li className="px-2">
            <Link to='/contact'> Contact</Link>
          </li>
          <li className="px-2">
            Cart
          </li>
          <button className="px-2"
          onClick={()=>{
            btnName === 'Login' ? 
            setBtnName('Logout'):setBtnName('Login')}}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header;