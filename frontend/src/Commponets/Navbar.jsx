import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import logo from "./Assets/logo.png";
import cart from "./Assets/cart_icon.png";
import menuIcon from "./Assets/toggle-icon.png";
import closeIcon from "./Assets/close-icon.png";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);

  // Calculate total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  // Handle menu item click to close the menu
  const handleMenuItemClick = (selectedMenu) => {
    setMenu(selectedMenu);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="Navbar">
            <div className="logo_div">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="logo" />
                <p>STYLE<span className="logo_text_st">HUB</span></p>
              </Link>
            </div>
            {/* Toggle icon for mobile view */}
            <div className="menu_icon text-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src={isMenuOpen ? closeIcon : menuIcon}
                alt="menu icon"
                className={isMenuOpen ? "close_icon" : "open_icon"}
              />
            </div>
            {/* Full-screen menu */}
            <div className={`links_div ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li onClick={() => handleMenuItemClick("shop")}>
                  <Link to="/">Shop</Link>
                  {menu === "shop" && <hr />}
                </li>
                <li onClick={() => handleMenuItemClick("mens")}>
                  <Link to="/mens">Men</Link>
                  {menu === "mens" && <hr />}
                </li>
                <li onClick={() => handleMenuItemClick("womens")}>
                  <Link to="/womens">Women</Link>
                  {menu === "womens" && <hr />}
                </li>
                <li onClick={() => handleMenuItemClick("kids")}>
                  <Link to="/kids">Kids</Link>
                  {menu === "kids" && <hr />}
                </li>
              </ul>
              {/* Login and Cart buttons */}
              <div className="login_cart_div cart_div">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button>Login</button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <div className="pos-rel">
                    <img src={cart} alt="cart" />
                    {totalCartItems > 0 && (
                      <div className="nav_count_cart">{totalCartItems}</div>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
