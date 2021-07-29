import React from "react";
import "./Cart.css";
import { useCart } from "../../Context/CartContext";
import ProductCard from "../../Components/Cards/Product/ProductCard";

export default function Cart() {
  const { state, dispatch } = useCart();
  function totalPrice(){
    let total = 0;
    state.map((item)=>{
      total+= (item.price)*item.cartQty
    })
    return total
  }
  return (
    <div>
      <div className="cart-display">
      {totalPrice()===0?"No items in cart":<h4>Total: Rs. {totalPrice()}</h4>}
      <div className="cart-items">
        {state.map((item) => {
          return (
            <div key={item.id} className="cart-product-display">
              <ProductCard
                item={item}
                buttonText={"Remove"}
                buttonHandler={() =>
                  dispatch({ type: "REMOVE", payload: item })
                }
                quantity={item.cartQty}
                incrementButtonHandler={()=> dispatch({type:"DECREMENT", payload:item})}
                decrementButtonHandler={()=> dispatch({type:"INCREMENT", payload:item})}
                displayIcon={"none"}
              />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
