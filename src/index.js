import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
import {WishlistProvider} from "./Context/WishlistContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <WishlistProvider>
        <Router>
          <App />
        </Router>
        </WishlistProvider>
      </CartProvider>
    </FilterProvider>
  </StrictMode>,
  rootElement
);
