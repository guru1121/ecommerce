import React, { useContext } from "react";
import star_icon from "../Commponets/Assets/star_icon.png"
import star_dull_icon from '../Commponets/Assets/star_dull_icon.png'
import { ShopContext } from "./ShopContext";

const ProductDisplay = (props) =>{
const {product} = props;
const {addToCart} = useContext(ShopContext);

    return(
        <div className="product_display">
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="product_img_container">
                    <div className="product_image_dispaly">
                       <img src={product.image} alt="product image" /> 
                       <img src={product.image} alt="product image" /> 
                       <img src={product.image} alt="product image" /> 
                       <img src={product.image} alt="product image" /> 
                    </div>
                    <div className="product_display_main_img">
                        <img src={product.image} alt="main image" srcset="" />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product_display_content">
                        <h1>{product.name}</h1>
                        <div className="reviwe">
                        <div className="product_star">
                            <img src={star_icon} alt="star" />
                            <img src={star_icon} alt="star" />
                            <img src={star_icon} alt="star" />
                            <img src={star_dull_icon} alt="star" />
                        </div>
                        <p>(122)</p>
                        </div>
                        <div className="product_price_cont">
                            <div className="product_old_pric">${product.old_price}</div>
                            <div className="product_new_pric">${product.new_price}</div>
                        </div>
                        <p className="singal_product_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia ipsum ullam, dolorum voluptas asperiores nostrum aliquid deserunt sequi repellendus ratione itaque, repudiandae nihil sit, eos modi!</p>
                        <div className="select_size_div">
                            <h3>Select Size</h3>
                            <div className="size_list">
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XLL</div>
                            </div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}} className="product_sin_cart_btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default ProductDisplay;


