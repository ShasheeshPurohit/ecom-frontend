import React from "react";
import "./Cart.css";
import { useCart } from "../../Context/CartContext";
import ProductCard from "../../Components/Cards/Product/ProductCard";

export default function Cart() {
  const { state, dispatch } = useCart();
  console.log(state);
  return (
    <div>
      <h4>Your Cart:</h4>
      <div className="cart-display">
        {state.map((item) => {
          return (
            <div className="cart-product-display">
              <ProductCard
                item={item}
                buttonText={"Remove"}
                buttonHandler={() =>
                  dispatch({ type: "REMOVE", payload: item })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
