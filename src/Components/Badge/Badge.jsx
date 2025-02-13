import React from "react"

export default function Badge({children , className}){

    return (
        <>
            <button className={`badge ${className}`}>
            {children} 
            </button>
        </>
    )
}