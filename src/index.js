import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
import {WishlistProvider} from "./Context/WishlistContext";

import App from "./App";
import { AuthProvider } from "./Context/AuthContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
     <AuthProvider>
      <FilterProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </FilterProvider>
     </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
