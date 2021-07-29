import React from "react";
import "./Wishlist.css";
import { useWishlist } from "../../Context/WishlistContext";
import ProductCard from "../../Components/Cards/Product/ProductCard";

export default function Wishlist() {
  const wishlist = useWishlist();

  return (
    <div>
      <h4>Your Wishlist:</h4>
      <div className="wishlist-display">
        {wishlist.state.map((item) => {
          return (
            <div key={item.id} className="wishlist-product-display">
              <ProductCard
                item={item}
                buttonText={"Remove"}
                buttonHandler={() =>
                  wishlist.dispatch({ type: "REMOVE", payload: item })}
                  displayIcon={"none"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
