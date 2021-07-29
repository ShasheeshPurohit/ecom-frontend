import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../../Components/Cards/Product/ProductCard";
import { useCart } from "../../Context/CartContext";
import FilterDisplay from "../../Components/FilterDisplay/FilterDisplay";
import { useFilter } from "../../Context/FilterContext";
import { useWishlist } from "../../Context/WishlistContext";

export default function Products() {
  const { dispatch } = useCart();
  const { filteredData } = useFilter();

  const wishlist = useWishlist();

  function iconColor(item){
    let flag = wishlist.state.find(product => product.id===item.id)
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
        {filteredData.map((item) => {
          return (
            <div className="product-card-display">
              <ProductCard
                item={item}
                buttonText={"Add to cart"}
                buttonHandler={() => dispatch({ type: "ADD", payload: item })}
                wishlistHandler={()=>
                  {
                  if(iconColor(item)==="white"){                 
                  wishlist.dispatch({type:"ADD", payload: item})
                  }
                  else{
                    wishlist.dispatch({type:"REMOVE", payload:item})
                  }
                }}
                wishlishtIconColor={iconColor(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
