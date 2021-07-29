import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Wishlist from "./pages/Wishlist/Wishlist";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="route-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
