import React from 'react'

const date = new Date().getFullYear()

export default function Footer(){
    return(
        <div className='footer'>

            <div>
                Ⓒ{date}  #VANLIFE
            </div>

        </div>
    )
}