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
            "https://www.gizmochina.com/wp-content/uploads/2020/01/Samsung-Galaxy-S20-Ultra-5G-1-500x500.jpg"
          }
          offer={"25% off for Students!"}
        />
        <Offer
          img={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000"
          }
          offer={"Get the new Iphone !"}
        />
        <Offer
          img={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTPM2_VW_34FR+watch-44-alum-gold-cell-6s_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1599020626000,1601922648000"
          }
          offer={"Offers on wearables !"}
        />
      </div>
    </div>
  );
}
