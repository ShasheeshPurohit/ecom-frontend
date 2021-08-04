import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useFilter } from "../../Context/FilterContext";
import { baseurl } from "../../utils/apiCalls";
import {useCart} from "../../Context/CartContext"
import {useWishlist} from "../../Context/WishlistContext";
const axios = require('axios')
import CardButton from "../../Components/Buttons/CardButton/CardButton";
import "./ProductPage.css"

export default function ProductPage(){
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
      (async function () {
        try{
        const response = await axios.get(
          `${baseurl}/api/products`
        );
        setProduct(response.data.products);
        setLoader(true);
        }
        catch(error){
          console.log("error")
        }
      })();
    }, []);
  
    function getProductDetails(products, productId) {
      return products.find((prod) => prod._id === productId);
    }
    const productFind = getProductDetails(product, productId);  
    
    return(
        <div>{loader ?
            <div className="product-page-details">
                <div className="primary-product-details">
                
                <div className="product-page-image">
                    <img src={productFind.image} className="product-detail-image"></img>
                    <p className="product-page-title">{productFind.name}</p>
                    <p className="product-page-price">Rs. {productFind.price}</p>
                </div>
                </div>
                <div className="product-page-description">
                <div>
                <p className="product-page-description-text">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
                <p className="product-rating"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>
                </div>
                <div 
                className="product-page-buttons">

                <div>
                <CardButton 
            
                buttonStyle="add-cart-button-product-page"  buttonText={"Add to cart"} />
                </div>
                <div>
                <CardButton 
                
                buttonStyle="add-wishlist-button-product-page" buttonText={"Add to wishlist"} />
                </div>
                </div>
                </div>
               
            </div>:"Loading"

}

        </div>
    );
}