import React from "react";
import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="heading-box">
        <p className="main-heading">Mobilewaale</p>
        <p className="sub-heading">
          Getting you the best deals <br /> on your favourite brands!
        </p>
      </div>
      <button className="jumbotron-button">New Offers</button>
    </div>
  );
}
