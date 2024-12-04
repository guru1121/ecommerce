import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import remove_icon from "../Commponets/Assets/cart_cross_icon.png";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const shippingCost = 10; // Set a fixed shipping cost or make it dynamic

    // Calculate subtotal
    const subtotal = all_product.reduce((acc, item) => {
        const quantity = cartItems[item.id] || 0;
        return acc + item.new_price * quantity;
    }, 0);

    // Calculate total after applying discount and adding shipping cost
    const total = subtotal - discount + shippingCost;

    // Function to handle promo code submission
    const handleApplyPromo = () => {
        if (promoCode === "SAVE10") {
            setDiscount(subtotal * 0.1); // 10% discount
        } else {
            setDiscount(0);
            alert("Invalid Promo Code");
        }
    };

    // Function to handle checkout
    const handleCheckout = () => {
        alert("Proceeding to checkout!");
        // Add your checkout logic here
    };

    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_product.map((item) => {
                                const quantity = cartItems[item.id];
                                if (quantity > 0) {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.new_price}</td>
                                            <td>{quantity}</td>
                                            <td>${item.new_price * quantity}</td>
                                            <td>
                                                <img
                                                    src={remove_icon}
                                                    onClick={() => removeFromCart(item.id)}
                                                    alt="Remove"
                                                    style={{ cursor: "pointer", width: "20px" }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Total, Subtotal, Shipping, Promo Code Section */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <h5 className="order_summary_heading">Order Summary</h5>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal:</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping:</p>
                        <p>${shippingCost.toFixed(2)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Discount:</p>
                        <p>-${discount.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between font-weight-bold">
                        <p>Total:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>

                {/* Promo Code Section */}
                <div className="col-md-4 promo_form_sp">
                    <p>If you have promo code, Enter it here</p>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button className="btn promoCode_btn" onClick={handleApplyPromo}>
                            Apply
                        </button>
                    </div>
                </div>
                  {/* Checkout Button */}
                  <div className="col-md-12 offer_content p-0">
                    <button className="" onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
