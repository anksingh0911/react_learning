import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
  return(
    <div className="header">
      <img 
      className="logo"
      src={LOGO_URL} alt="Logo"
      />
      <div className="nav-wrapper">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;