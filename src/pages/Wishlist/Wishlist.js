import React from "react";
import {Link} from 'react-router-dom'
import "./Wishlist.css";
import { useWishlist } from "../../Context/WishlistContext";
import ProductCard from "../../Components/Cards/Product/ProductCard";

export default function Wishlist() {
  const {wishState, removeFromWishList} = useWishlist();

  return (
    <div>
      <div className="wishlist-display">
        {wishState.length===0?"Wishlist is empty":
        (wishState.map((item) => {
          return (
            <div key={item.id} className="wishlist-product-display">
              <ProductCard
                item={item}
                itemName={<Link to={`/products/${item.id}`} className="product-name">{item.name}</Link>}
                buttonText={"Remove"}
                buttonHandler={() =>removeFromWishList(item)}
                  displayIcon={"none"}
                displayQuantitySection={"none"}
              />
            </div>
          );
        }))}
      </div>
    </div>
  );
}
