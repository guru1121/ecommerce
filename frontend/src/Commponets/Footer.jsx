import React from "react";
import footer_logo from './Assets/logo_big.png';
import Instagram_icon from './Assets/instagram_icon.png';
import Print_icon from './Assets/pintester_icon.png';
import Whatsapp_icon from './Assets/whatsapp_icon.png';

const Footer = () =>{
    return(
        <div className="footer_sec_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_content text-center">
                            <div className="footer_logo">
                            <img src={footer_logo} alt="footer logo" srcset="" />
                            <h3>STYLE<span className="logo_text_st">HUB</span></h3>
                            </div>
                            <div className="footer_links">
                                <ul>
                                    <li>Company</li>
                                    <li>Products</li>
                                    <li>Offices</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="social_media">
                                <img src={Instagram_icon} alt="footer icon" srcset="" />
                                <img src={Print_icon} alt="footer icon" srcset="" />
                                <img src={Whatsapp_icon} alt="footer icon" srcset="" />
                            </div>
                        </div> 
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;