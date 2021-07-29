import React from "react";
import "./ProductCard.css";

export default function ProductCard({ item, buttonText, buttonHandler,wishlishtIconColor, wishlistHandler, displayIcon, displayQuantitySection, quantity, incrementButtonHandler, decrementButtonHandler}) {
  return (
    <div className="product-card">
      <div className="product-image">
      <img src={item.image} alt="product" />
      <div className="wishlist-icon" style={{color:wishlishtIconColor, display:displayIcon}} onClick={wishlistHandler}><i class="fas fa-heart"></i></div>
      </div>
      <div>
        <p>{item.name}</p>
        <p>Rs. {item.price}</p>
      </div>
      <div className="quantity-buttons" style={{display:displayQuantitySection}}>
      <i class="fas fa-minus" onClick={incrementButtonHandler}></i>
     {quantity}
      <i class="fas fa-plus" onClick={decrementButtonHandler}></i>
      </div>
      <button className="add-cart-button" onClick={buttonHandler} >
        {buttonText}
      </button>
    </div>
  );
}
