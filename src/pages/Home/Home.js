import React from "react";
import "./Home.css";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Offer from "../../Components/Cards/Offer/Offer";


export default function Home() {
  

  return (
    <div className="home">
      <Jumbotron />
      <div className="offer-section">
        <Offer
          img={
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=566&q=80"
          }
          offer={"25% off for Students!"}
        />
        <Offer
          img={
            "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
          }
          offer={"Offers on wearables !"}
        />
        <Offer
          img={
            "https://images.unsplash.com/photo-1596207891316-23851be3cc20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          }
          offer={"20% off on accesorries !"}
        />
      </div>
    </div>
  );
}
