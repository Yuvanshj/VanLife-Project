import React from "react";
import { useParams } from "react-router";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Badge from "../../Components/Badge/Badge";

export default function VanDetail(){

    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])


    return(
    <div className="van-detail-container">

            <Link className="back-link" to={'/vans'} > 
                <FaLongArrowAltLeft className="arrow" /> Back to all vans
            </Link>

            <div className="van-detail-container-2">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} alt={van.name} />

                        <div className="van-detail-2">
                            <Badge className={`badge badge-${van.type} selectedVanBadge`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</Badge>
    
                            <h2 className="vanName">{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                            <p className="vanDescription">{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>

                    </div>
                ) : <h2>Loading...</h2>}
            </div>

    </div>
    )
}
