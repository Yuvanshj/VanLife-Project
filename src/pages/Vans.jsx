import React from "react";
import Badge from "../Components/Badge/Badge";
import VanCard from "../Components/VanCard";

import "../../Server/server"

export default function Vans(){

    const [vanData , setVanData] = React.useState([]);
   
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, []);

    return (
        <> 
            <main className="main3">
                <h1>Explore our van options</h1>

                <div className="badgeDiv">
                    <Badge>Simple</Badge>
                    <Badge>Luxury</Badge>
                    <Badge>Rugged</Badge>
                </div>

                <div className="vanContainer">
                    {vanData.map((van)=>{
                        return (<VanCard key={van.id} name={van.name} imageUrl={van.imageUrl} price={van.price} type={van.type} />)
                    })}
                </div>
            </main>
        </>
    )
}


