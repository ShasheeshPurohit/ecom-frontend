import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductPage from "./pages/ProductPage/ProductPage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import PrivateRoute from "./utils/privateRoute";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="route-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductPage/>} />
          <PrivateRoute path="/cart" element={<Cart />} />
          <PrivateRoute path="/wishlist" element={<Wishlist/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
