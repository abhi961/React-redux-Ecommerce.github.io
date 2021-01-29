import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill} from "react-icons/bs";

const Navbar = () => {
     const {totalQty} = useSelector(state=> state.CartReducer)
    return (
          <>
          <div className="navbar">
              <div className="logo-img">
                  <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
              </div>
              <div className="nav-links">
                  <Link to="/Cart"> 
                  
                    <div className="cart-box">
                    <BsFillBagFill className="cart-icon"/>
                    <span className="counter-icon">{totalQty}</span>
                  </div></Link>
             
          </div>
          </div>
          </>
    );
}

export default Navbar;
