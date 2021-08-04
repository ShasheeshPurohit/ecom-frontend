import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useCart} from "../../Context/CartContext"
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
  const {token, logoutHandler} = useAuth();
  const {state} = useCart();

  const [sidebar, setSidebar] = useState(false);


  return (
    <div>
      {sidebar?
      <div className="sidebar">
        <div className="sidebar-brand">
          <p>Mobilewaale</p>
          <i class="fas fa-times" onClick={()=>setSidebar(!sidebar)}></i>
        </div>
        <ul className="nav-items-list-sidebar">
            <li>
              <Link className="nav-links-sidebar" onClick={()=>setSidebar(!sidebar)} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links-sidebar" onClick={()=>setSidebar(!sidebar)} to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-links-sidebar" onClick={()=>setSidebar(!sidebar)} to="/wishlist">
              <i class="fas fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link className="nav-links-sidebar" onClick={()=>setSidebar(!sidebar)} to="/cart">
              <i class="fas fa-shopping-cart"></i><div className="cart-length-mobile">{state!=0?state.length:""}</div>
              </Link>
            </li>
            
          </ul>
          
      
      </div>:""}
      <nav className="navbar">
        <div className="nav-brand">
        <i className="fas fa-bars sidebar-button" onClick={()=> setSidebar(!sidebar)}></i>
          <Link className="nav-brand-link" to="/">Mobilewaale</Link></div>
        <div className="nav-items">
          <ul className="nav-items-list">
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/wishlist">
              <i class="fas fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/cart">
              <i class="fas fa-shopping-cart"></i><div className="cart-length">{state!=0?state.length:""}</div>
              </Link>
            </li>
            {token?<li onClick={()=>logoutHandler()}>Log out</li>:
            <li>
              <Link className="nav-links" to="/login">
                Login
              </Link>
            </li>
            }
            {token?"":
            <li>
              <Link className="nav-links" to="/signup">
                Sign Up
              </Link>
            </li>
            }
            
          </ul>
          <ul className="nav-items-list-mobile">
            
            {token?<li onClick={()=>logoutHandler()}>Log out</li>:
            <li>
              <Link className="nav-links" to="/login">
                Login
              </Link>
            </li>
            }
            {token?"":
            <li>
              <Link className="nav-links" to="/signup">
                Sign Up
              </Link>
            </li>
            }
          </ul>
          
        </div>
      </nav>
    </div>
  );
}
