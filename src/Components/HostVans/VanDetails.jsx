import React from "react";
import { useOutletContext } from "react-router";

export default function VanDetails(){

    const hostVan = useOutletContext()

    

    return(
        <div className="hostVanLinkDetails">
            <h4>Name: {hostVan.name}</h4>
            <h4>Category: {hostVan.type}</h4>
            <h4>Description: {hostVan.description}</h4>
            <h4>Visibility: public</h4>
        </div>
    )
}