import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router";
import { Link , NavLink, Outlet } from "react-router-dom"

import Badge from '../../Components/Badge/Badge';

export default function Vans(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

    const params = useParams()
    const [hostVan, setHostVan] = React.useState(null)


    React.useEffect(() => {
            fetch(`/api/host/vans/${params.id}`)
                .then(res => res.json())
                .then(data => setHostVan(data.vans[0]))
        }, [params.id])

    return(
        <div className='hostVanDetails'>
            <Link className="back-link" to={'/host/vans'} > 
                <FaLongArrowAltLeft className="arrow" /> Back to your vans
            </Link>
            <div>
                {hostVan ? (
                <div className='hostVanDetail-1'> 
                    <div className="hostVanDetail-2">
                        <img className='hostVanImg' src={hostVan.imageUrl} alt={hostVan.name} />
                        <div className="van-detail-2">
                            <Badge className={`badge badge-${hostVan.type} selectedVanBadge`}>{hostVan.type.charAt(0).toUpperCase() + hostVan.type.slice(1)}
                            </Badge>
                            <h2 className="vanName">{hostVan.name}</h2>
                            <p className="van-price"><span>${hostVan.price}</span>/day</p>
                            {/* <p className="vanDescription">{hostVan.description}</p> */}
                        </div>
                    </div>

                    <div id='hostVanNavbar'>
                        <NavLink
                        to={`/host/vans/${params.id}`}
                        className={"hostVanNavbarLinks"}
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}>
                            Details
                        </NavLink>
    
                        <NavLink
                            to={`/host/vans/${params.id}/pricing`}
                            className={"hostVanNavbarLinks"}
                            style={({ isActive }) => isActive ? activeStyles : null}>
                            Pricing
                        </NavLink>
    
                        <NavLink
                            to={`/host/vans/${params.id}/photos`}
                            className={"hostVanNavbarLinks"}
                            style={({ isActive }) => isActive ? activeStyles : null}>
                            Photos
                        </NavLink>
                    </div>

                <Outlet context={hostVan} />

                </div>
                ) : <h2>Loading...</h2>}

                

            </div>

        </div>
    )
}
