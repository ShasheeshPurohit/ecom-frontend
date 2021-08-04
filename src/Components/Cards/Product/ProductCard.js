import React from "react";
import CardButton from "../../Buttons/CardButton/CardButton";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item,itemName, buttonText, buttonHandler,wishlishtIconColor, wishlistHandler, displayIcon, displayQuantitySection, quantity, incrementButtonHandler, decrementButtonHandler}) {
  
  const navigate = useNavigate();
  
  return (
    <div className="product-card">
      <div className="product-image">
      <img src={item.image} alt="product" />
      <div className="wishlist-icon" style={{color:wishlishtIconColor, display:displayIcon}} onClick={wishlistHandler}><i class="fas fa-heart"></i></div>
      </div>
      <div className="product-details">
        <p className="product-name">{itemName}</p>
        <p className="product-price">Rs. {item.price}</p>
      
      <div className="quantity-buttons" style={{display:displayQuantitySection}}>
      <i class="fas fa-minus" onClick={decrementButtonHandler}></i>
     {quantity}
      <i class="fas fa-plus" onClick={incrementButtonHandler}></i>
      </div>
      
      </div>
    
      <CardButton buttonStyle="add-cart-button" buttonHandler={buttonHandler} buttonText={buttonText} />
    </div>
  );
}
