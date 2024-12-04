import React from "react";
import data_product from './Assets/data';
import Item from './Item';

function Popular() {
    return (
        <div className="container">
            <div className="popular">
                <h2>POPULAR IN WOMEN'S</h2>
                <hr />
                <div className="row popular_items">
                    {data_product.map((product, i) => (
                        <Item 
                            key={i} 
                            id={product.id} 
                            name={product.name} 
                            image={product.image} 
                            new_price={product.new_price} 
                            old_price={product.old_price} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Popular;
