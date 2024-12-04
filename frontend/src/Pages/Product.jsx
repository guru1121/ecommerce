import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Commponets/ShopContext";
import Breadcrum from "../Commponets/Breadcrum";
import ProductDisplay from "../Commponets/ProductDisplay";
import ProductDescription from "../Commponets/ProductDescription";
import RelatedProduct from "../Commponets/RelatedProduct";

function Product() {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams(); 
    const product = all_product.find((e) => e.id === Number(productId));

    return (

        <div>
            {product ? (
                <Breadcrum product={product} />
                
            ) : (
                <p>Product not found</p>
            )}
            <ProductDisplay product={product}/>
            <ProductDescription/>
            <RelatedProduct/>
        </div>
    );
}

export default Product;
