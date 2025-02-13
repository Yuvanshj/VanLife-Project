import React from "react";
import {imgAbout} from "../Assets/index"
import { Link } from "react-router-dom"

export default function About(){
    return(
      <main className="main2">
        <img src={imgAbout} alt="aboutimg" />

        <div>
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>

            <p>
              Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels
            </p>

            <div className="exploreDiv">
              <p id="btnTitle">Your destination is waiting.
              Your van is ready.</p>

              <Link id="link" to={'/vans'}>
                <button >Explore our vans</button>
              </Link>
            </div>
          
        </div>
      </main>

    )
  }