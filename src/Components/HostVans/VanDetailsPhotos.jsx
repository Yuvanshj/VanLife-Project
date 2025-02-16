import React from "react";
import { useOutletContext } from "react-router";

export default function VanDetailsPhotos(){
    const hostVan = useOutletContext()
    return(
        <div>
            <img className="hostVanCardImg" src={hostVan.imageUrl} alt="" />
        </div>
    )
}