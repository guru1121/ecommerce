import React, { useContext } from "react";
import { ShopContext } from "../Commponets/ShopContext";
import dropdown_icon from '../Commponets/Assets/dropdown_icon.png'
import Item from "../Commponets/Item";

function ShopCategory(props) {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop_category w-100">
            <img className="img-fluid" src={props.banner} alt="banner" />
            <div className="container padding_TB">
                <div className="d-flex justify-content-between pb-3">
                <div className="shopcategory-indexshort">
                    <p><span>Showing 1-12</span> out of 36 products</p>
                </div>
                <div className="shopcategory-short">
                    <p>Sort by <img src={dropdown_icon} alt="dropdown_icon" /></p>
                </div>
                </div>
              
                <div className="row">
                {all_product
                    .filter(product => product.category === props.category)
                    .map((product, i) => (
                        <Item
                            key={i}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            new_price={product.new_price}
                            old_price={product.old_price}
                        />
                    ))}
                    <div className="load_more_btn d-flex justify-content-center">
                        <button>Load more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCategory;