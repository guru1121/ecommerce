import React from "react";
import HeroBanner from '../Commponets/HeroBanner';
import Popular from '../Commponets/Popular';
import Offers from "../Commponets/Offers";
import NewCollection from "../Commponets/NewCollection";
import NewsLetter from "../Commponets/NewsLetter";

function Shop() {
    return(
        <div>
             <HeroBanner/>
             <Popular/>
             <Offers/>
             <NewCollection/>
             <NewsLetter/>
        </div>
    )
}
 
export default Shop;