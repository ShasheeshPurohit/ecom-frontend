import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Cart.css";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";
import ProductCard from "../../Components/Cards/Product/ProductCard";
const axios = require('axios')
import { baseurl } from "../../utils/apiCalls";

export default function Cart() {
  const {state, dispatch} = useCart();
  const {token} = useAuth();
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [less, setLess] = useState(false);

  //   Cart Functions
  const increaseQuantity = async (product) => {
    setAdd(true);
    const response = await axios.post(`${baseurl}/api/cart/${product._id}/inc`, {});
    console.log(response)
    if (response.status === 200) {
      dispatch({ type: "INCREMENT", payload: product });
      setAdd(false);
    }
    setAdd(false);
  };

  const decreaseQuantity = async (product) => {
    if (product.qty > 1) {
      setLess(true);
      const response = await axios.post(`${baseurl}/api/cart/${product._id}/dec`, { });
      if (response.status === 200) {
        dispatch({ type: "DECREMENT", payload: product });
      }
    } else {
      removeFromCart(product);
    }
    setLess(false);
  };

  const removeFromCart = async (product) => {
    setRemove(true);
    const response = await axios.delete(`${baseurl}/api/cart/${product._id}`);
    if (response.status === 200) {
      dispatch({ type: "REMOVE", payload: product });
      setRemove(false);
    }
    setRemove(false);
  };

  function totalPrice(){
    let total = 0;
    state.map((item)=>{
      total+= (item.price)*item.qty
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
            <div key={item._id} className="cart-product-display">
              <ProductCard
                item={item}
                itemName={<Link to={`/products/${item._id}`} className="product-name">{item.name}</Link>}
                buttonText={"Remove"}
                buttonHandler={() =>removeFromCart(item)}
                quantity={item.qty}
                incrementButtonHandler={()=> increaseQuantity(item)}
                decrementButtonHandler={()=> decreaseQuantity(item)}
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
