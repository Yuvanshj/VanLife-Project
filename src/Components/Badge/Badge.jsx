import React from "react"

export default function Badge({children , className , onClick}){

    return (
        <>
            <button onClick={onClick} className={`badge ${className}`}>
                {children} 
            </button>
        </>
    )
}
