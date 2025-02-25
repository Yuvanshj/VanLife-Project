import React from "react";

import { Outlet , Navigate} from 'react-router-dom';

export default function Auth(){

    const auth = false;

    if(auth){
       return <Outlet />
    }else{
        return <Navigate to={'/login'} state={{message: "You must log in first"}}  />
    }

}
