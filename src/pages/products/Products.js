import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "../../Components/Cards/Product/ProductCard";
import { useCart } from "../../Context/CartContext";
import FilterDisplay from "../../Components/FilterDisplay/FilterDisplay";
import { useFilter } from "../../Context/FilterContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useAuth } from "../../Context/AuthContext";
import { baseurl } from "../../utils/apiCalls";
import {Link, Navigate, useNavigate} from "react-router-dom";
import Loader from "../../Components/Loader/Loader"
const axios = require('axios')

export default function Products() {

  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { filteredData } = useFilter();

  const {wishState, addToWishList, removeFromWishList} = useWishlist();

  const [idArray, setIdArray] = useState([]);
  const [loading, setloading] = useState(false);
  const [toastStatus, setToastStatus] = useState(false)
  const {token} = useAuth();

  useEffect(() => {
    setIdArray(
      state.map((item) => {
        return item.id || item._id;
      })
    );
  }, [state]);

  const addToCart = async (product) => {
    console.log(product)
    setloading(true);
    const response = await axios.post(`${baseurl}/api/cart/${product._id}`, { });
    
    if (response.status === 200) {
      console.log("Hogayaa bhaiiii")
      dispatch({ type: "ADD", payload: product });
      setloading(false);
    }
    setloading(false);
  };

  function iconColor(item){
    let flag = wishState.find(product => product._id===item._id)
    if(flag){
      return "red"
    }
    return "white"
  }
 
  return (
    <div className="product-page-layout">
      <div className="filter-menu">
        <FilterDisplay />
      </div>
      <div className="products-section">
        {(filteredData.map((item) => {
          return (
            <div className="product-card-display">
              <ProductCard
              
                item={item}
                itemName={<Link to={`/products/${item._id}`} className="product-name">{item.name}</Link>}
                buttonText={"Add to cart"}
                buttonHandler={() => addToCart(item)}
                wishlistHandler={()=>
                  {
                  if(iconColor(item)==="white"){                 
                  addToWishList(item)
                  }
                  else{
                  removeFromWishList(item)
                  }
                }}
                wishlishtIconColor={iconColor(item)}
                displayQuantitySection={"none"}
              />
            </div>
          );
        }))}
      </div>
    </div>
  );
}
