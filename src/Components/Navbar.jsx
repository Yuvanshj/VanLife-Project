import React from "react";
import { Link , NavLink } from "react-router-dom"
import {logo} from "../Assets/index"



export default function Navbar(){

    return (
        <header className="navbar">

            <Link to={"/"}>
                <img className="logoImg" src={logo} alt="Vanlife Logo" /> 
            </Link>
             
            <div className="linkContainer">
                
                <NavLink 
                    to={"/host"}
                    end
                    className={ ({isActive}) => isActive ? "link active-link" : "link" } 
                    > 
                        Host 
                </NavLink>
                <NavLink 
                    className={ ({isActive}) => isActive ? "link active-link" : "link" }  
                    to={"/about"}> 
                        About 
                </NavLink>
                <NavLink 
                    className={ ({isActive}) => isActive ? "link active-link" : "link" } 
                    to={"/Vans"}>   
                        Vans 
                </NavLink>

            </div>

        </header>

    )
}