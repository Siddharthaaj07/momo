import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import momoLogo from '../../images/momo.jpg';
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartProvider";
import { CgProfile } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";



function Navigation() {

  const { user, isAuthenticated, logout } = useAuth0();


  const { state } = useContext(CartContext);
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty ;
  }, 0);

  return (
    <div className=" flex justify-around flex-wrap items-center mt-3 ">
      <div className="  flex items-center px-5 gap-x-3">
        <img src={momoLogo} alt="momoLogo" className="h-5" />
        <NavLink to="/" className="text-green-600  font-sans font-bold ">
          Momo
        </NavLink>
      </div>
      <div className=" flex text-slate-500  px-5 gap-x-5 font-bold   ">

       
        <NavLink className="hover:bg" to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
       </div>
       
       <div>
        <NavLink className=" relative  flex  " to="/cartPage">
          <span>
            <FaCartPlus size={20} />
          </span>
          <span className=" absolute bottom-3 left-5 "> {totalItems}</span>
        </NavLink>
      </div>

      <div className=" flex  px-5 gap-x-5   items-center">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
        </NavLink>

        <NavLink to="https://www.tiktok.com/" target="_blank">
          <FaTiktok />
        </NavLink>

        <NavLink to="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-orange-700 rounded-3xl text-white px-4 py-2"
        >
          Contact US
        </NavLink>
        {isAuthenticated ? (
          <NavLink
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </NavLink>
        ) : (
          <div className="flex text-slate-500  px-5 gap-x-5  ">
            <NavLink className="text-blue-800 border-2 h-8 w-24 text-center
             flex justify-center font-bold bg-slate-300  hover:bg-slate-950 " to="/login">Login</NavLink>
            <NavLink className="text-blue-800 border-2 h-8 w-24 text-center 
            flex justify-center font-bold bg-slate-300 hover:bg-slate-950 " to="/signUp">SignUP</NavLink>
          </div>
        )}
        {isAuthenticated ? <NavLink to="/profile"><img
        className="rounded-full h-6"
        src={user.picture} alt="" />
        </NavLink> : <h1><CgProfile/></h1>}
      </div>
    </div>
  );
}

export default Navigation;

