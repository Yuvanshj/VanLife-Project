import React from "react";
import Badge from "./Badge/Badge";

export default function VanCard({ name , price , imageUrl , type  }){
    return(
        <>
        <div className="vanCard">
            <img className="vanImg" src={imageUrl} alt="Vans" />

            <div className="vanDetails">
                <div>
                    <p>{name}</p>
                    <Badge className={`badge-${type}`}>{type}</Badge>
                </div>
                <div>
                    <p>${price}</p>
                    <p>/day</p>
                </div>
            </div>
        </div>
        </>
    )
}