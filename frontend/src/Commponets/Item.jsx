import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

function Item(props) {
    const { addToCart } = useContext(ShopContext); // Access addToCart from context

    // Function to scroll to the top only when clicking on the product image
    const handleImageClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 cus_mob_col">
            <div className="item_div">
                <Link to={`/Product/${props.id}`}>
                    <img
                        onClick={handleImageClick} // Only scrolls on image click
                        src={props.image}
                        alt="product image"
                        className="img-fluid"
                    />
                </Link>
                <p className="product_des">{props.name}</p>
                <div className="item_price">
                    <div className="item_new_price">
                        <p>{props.new_price} $</p>
                    </div>
                    <div className="item_old_price">
                        <p>{props.old_price} $</p>
                    </div>
                    <div>
                        <button
                            onClick={() => addToCart(props.id)}
                            className="product_cart_btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
