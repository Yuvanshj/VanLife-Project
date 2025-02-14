import React from "react";
import Badge from "./Badge/Badge";

export default function VanCard({ name , price , imageUrl , type , id }){
    return(
        <>
        <div key={id} className="vanCard">
            <img className="vanImg" src={imageUrl} alt="Vans" />

            <div className="vanDetails">
                <div className="vanTitleContainer">
                    <p className="vanTitle">{name}</p>
                    <Badge 
                        className={`badge-${type}`}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Badge>
                </div>

                <div className="vanPriceContainer">
                    <p className="vanPrice">${price}</p>
                    <p>/day</p>
                </div>
            </div>
        </div>
        </>
    )
}


