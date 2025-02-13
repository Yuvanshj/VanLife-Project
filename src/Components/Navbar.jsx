import React from "react";
import { Link } from "react-router-dom"
import {logo} from "../Assets/index"

export default function Navbar(){
    return (
        <header className="navbar">

            <Link to={"/"}>
                <img className="logoImg" src={logo} alt="Vanlife Logo" /> 
            </Link>
             
           

            <div className="linkContainer">
                
                <Link className="link" to={"/about"}> About </Link>
                <Link className="link" to={"/Vans"}> Vans </Link>

            </div>

        </header>

    )
}