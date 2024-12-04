import React from "react";
import arrow_icon from "../Commponets/Assets/breadcrum_arrow.png";


const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className="container pt-3 pb-5">
            <div className="breadcrum">
            Home <img src={arrow_icon} alt="home" /> SHOP <img src={arrow_icon} alt="home" />
            {product.category} <img src={arrow_icon} alt="home" />
            {product.name}
        </div>
        </div>
    );
};

export default Breadcrum;
