import React from "react";
import "./Jumbotron.css";
import { useNavigate } from "react-router-dom";

export default function Jumbotron() {

  const navigate = useNavigate();

  return (
    <div className="jumbotron">
      <div className="heading-box">
        <p className="main-heading">Mobilewaale</p>
        <p className="sub-heading">
          Getting you the best deals <br /> on your favourite brands!
        </p>
      </div>
      <button className="jumbotron-button" onClick={()=>navigate("/products")}>New Offers</button>
    </div>
  );
}
