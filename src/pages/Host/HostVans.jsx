import React from 'react';

import HostVanCard from '../../Components/HostVans/HostVanCard';
import { Link } from 'react-router';

import '../../../Server/server'

export default function Vans(){

    const [hostVanData , setHostVanData] = React.useState([]);
       
        React.useEffect(() => {
            fetch("/api/host/vans")
                .then(res => res.json())
                .then(data => setHostVanData(data.vans))
        }, []);

    return(
        <>
            <div className='hostVan'>
                <h1>Your Listed Vans</h1>

                <div className="vanHostContainer">
                    {hostVanData.map((van)=>{
                        return (
                            <Link to={`/host/vans/${van.id}`}>
                             <HostVanCard imageUrl={van.imageUrl} name={van.name} price={van.price} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
