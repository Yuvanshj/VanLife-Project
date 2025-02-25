import React from "react";
import Badge from "../../Components/Badge/Badge";
import VanCard from "../../Components/VanCard";

import { Link , useSearchParams } from "react-router-dom"

import "../../../Server/server"

export default function Vans(){

    const [searchParams , setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')


    const [vanData , setVanData] = React.useState([]);
   
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, []);

    const filteredData = typeFilter ? vanData.filter((van) => van.type === typeFilter) : vanData

    return (
        <> 
            <main className="main3">
                <h1>Explore our van options</h1>

                <div className="badgeDiv">
                    <Link to={'/vans?type=simple'}>
                        <Badge className={`simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</Badge>
                    </Link>    
                    <Link to={'/vans?type=luxury'}>
                        <Badge className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`} >Luxury</Badge>
                    </Link>  
                    <Link to={'/vans?type=rugged'}>
                        <Badge className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`} >Rugged</Badge>
                    </Link>  

                    {typeFilter ?  <div id="clearFilter">    
                        <Link to={'/vans'}>
                              <p className="clear-filter"> clear filter</p>
                        </Link>
                    </div> : null}
                   
                </div>

                <div className="vanContainer">
                    {filteredData.map((van)=>{
                        return (
                            <Link to={`/vans/${van.id}`}>
                                <VanCard id={van.id} name={van.name} imageUrl={van.imageUrl} price={van.price} type={van.type} />
                            </Link>
                    )
                    })}
                </div>
                
            </main>
        </>
    )
}


