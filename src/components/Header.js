import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import logo from '../images/logo.png';
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);
  // subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex px-4 py-1 mb-4 justify-between items-center shadow-lg">
      <Link to="/">
        <img 
          className="w-16 h-16"
          src='../images/logo.png' alt="Logo"
        />
      </Link>
      <div className="nav-wrapper">
        <ul className="flex m-1 p-1">
          <li className="px-2">
            Online Status : {onlineStatus === true ? "Online" : "Offline"}
          </li>
          <li className="px-2">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-2">
            <Link to="/services">Services</Link>
          </li>
          <li className="px-2">
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart({cartItems?.length} items)</Link>
          </li>
          <li className="px-2">
            <Link to="/login">Login</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
