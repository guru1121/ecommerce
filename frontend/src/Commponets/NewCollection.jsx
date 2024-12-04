import React from "react";
import data_product from './Assets/new_collections';
import Item from './Item';

const NewCollection = () => {
    return(
        <div className="container">
            <div  className="popular">
                <h2>NEW COLLECTIONS</h2>
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
    )
}

export default NewCollection;