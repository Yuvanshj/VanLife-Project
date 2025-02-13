import React from 'react'
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <main className="main1">
            <div className="mainContainer">
                <h1> You got the travel plans, we got the travel vans. </h1>
                <p>Add adventure to your life by joining the #Vanlife movement. Rent the perfect van to make your perfect road trip.</p>

                <Link to={'/vans'}>
                    <button id='mainBtn'>Find your van</button>
                </Link>
            </div>

        </main>
        
    )
}