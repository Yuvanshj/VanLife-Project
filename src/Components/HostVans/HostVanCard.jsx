import React from "react";

export default function hostVanCard({id , name , imageUrl  , price}){
    return(
        
            <div className="hostVanCard">
                <div>
                    <img className="hostVanCardImg" src={imageUrl} alt={{imageUrl}} />
                </div>
                <div className="hostVanCardDetails">
                    <p className="hostVanCardName">{name}</p>
                    <p>${price} /day</p>
                </div>
            </div>
        
    )
} 