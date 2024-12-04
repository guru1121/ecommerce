import React from "react";
import HeroImage from "./Assets/hero_image.png"
import ArrowIcon from "./Assets/arrow.png"
import HandIcon from "./Assets/hand_icon.png"

function HeroBanner() {
    return(
        <div>
            <section className="hero_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero_banner_content">
                                <p>NEW ARRIVALS ONLY</p>
                                <h2>new <img src={HandIcon} alt="hand icon"/></h2>
                                <h2>collections</h2>
                                <h2>for everyone</h2>
                                <button>Latest Collection <img src={ArrowIcon} alt="button arrow"/></button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero_banner_img text-end">
                                <img src={HeroImage} alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroBanner;