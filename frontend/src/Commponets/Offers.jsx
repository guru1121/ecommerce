import React from "react";
import offer_img from './Assets/exclusive_image.png';

const Offers = () => {
    return(
        <div className="container">
            <div className="offer_sec_bg">
            <div className="row">
                <div className="col-md-7">
                    <div className="offer_content">
                        <h2>Exclusive</h2>
                        <h2>Offers For You</h2>
                        <p>ONLY ON BEST SELLERS PRODUCTS</p>
                        <button>Check Now</button>
                    </div>
                </div>
                <div className="col-md-5">
                <div className="offer_img text-center">
                    <img src={offer_img} alt="offer banner image" />
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Offers;
