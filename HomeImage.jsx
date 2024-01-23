import React from "react";
import Image from "./assets/Homepage.png";

const HomeImage=()=>{
    return(
        <div className="homeimage">
            <img src={Image} alt=""/>
            <p>Book Your</p>
            <p>Favourite Time</p>
        </div>
    )
}

export default HomeImage