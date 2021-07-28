import React from "react";
import "./Offer.css";

export default function Offer({ img, offer }) {
  return (
    <div className="offer-card">
      <img className="offer-img" src={img}></img>
      <p className="offer-text">{offer}</p>
    </div>
  );
}
