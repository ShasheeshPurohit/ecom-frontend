import React from "react";
import "./ProductCard.css";

export default function ProductCard({ item, buttonText, buttonHandler }) {
  return (
    <div className="product-card">
      <img src={item.image} alt="product" />
      <div>
        <p>{item.name}</p>
        <p>Rs. {item.price}</p>
      </div>
      <button className="add-cart-button" onClick={buttonHandler}>
        {buttonText}
      </button>
    </div>
  );
}
