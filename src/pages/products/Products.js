import React from "react";
import "./Products.css";
import ProductCard from "../../Components/Cards/Product/ProductCard";
import { useCart } from "../../Context/CartContext";
import FilterDisplay from "../../Components/FilterDisplay/FilterDisplay";
import { useFilter } from "../../Context/FilterContext";

export default function Products() {
  const { dispatch } = useCart();
  const { filteredData } = useFilter();

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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
