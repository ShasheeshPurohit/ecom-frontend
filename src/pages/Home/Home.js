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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPB5raqKT6cZ2ad-MbN6QEXJFP8dLlFvvfwQL61YLIdWV6TOCjP4EhXxmvaG4u0aa3Io&usqp=CAU"
          }
          offer={"25% off for Students!"}
        />
        <Offer
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPB5raqKT6cZ2ad-MbN6QEXJFP8dLlFvvfwQL61YLIdWV6TOCjP4EhXxmvaG4u0aa3Io&usqp=CAU"
          }
          offer={"25% off for Students!"}
        />
        <Offer
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPB5raqKT6cZ2ad-MbN6QEXJFP8dLlFvvfwQL61YLIdWV6TOCjP4EhXxmvaG4u0aa3Io&usqp=CAU"
          }
          offer={"25% off for Students!"}
        />
      </div>
    </div>
  );
}
