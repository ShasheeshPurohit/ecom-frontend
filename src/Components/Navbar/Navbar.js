import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useCart} from "../../Context/CartContext"
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
  const {token, logoutHandler} = useAuth();

  const {state} = useCart();

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand"><Link className="nav-brand-link" to="/">Mobilewaale</Link></div>
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
          
        </div>
      </nav>
    </div>
  );
}
