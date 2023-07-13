import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
  const [btnName , setBtnName] = useState('Login');

  return(
    <div className="header">
      <img 
      className="logo"
      src={LOGO_URL} alt="Logo"
      />
      <div className="nav-wrapper">
        <ul>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'> About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link> 
          </li>
          <li>
            <Link to='/contact'> Contact</Link>
          </li>
          <li>Cart</li>
          <button 
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