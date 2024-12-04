import React from "react";
import Item from "./Item";
import data_product from "../Commponets/Assets/data"

const RelatedProduct = () =>{
    return(
        <div className="container pt-5">
            <div className="popular">
                <h2 className="text-center">Related Products</h2>
                <hr/>
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
    )
}
export default RelatedProduct;