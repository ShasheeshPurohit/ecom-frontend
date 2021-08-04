import React from "react";
import "./Offer.css";
import { useNavigate } from "react-router-dom";

export default function Offer({ img, offer }) {
  const navigate = useNavigate();
  
  return (
    <div className="offer-card" onClick={()=>navigate("/products")}>
      <img className="offer-img" src={img}></img>
      <p className="offer-text">{offer}</p>
    </div>
  );
}
