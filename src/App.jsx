import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Layout from './Components/Layout';

import Home from './pages/Home'
import About from "./pages/About";
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import HostLayout from './pages/Host/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans'
import HostVansDetails from './pages/Host/HostVansDetails'
import VanDetails from './Components/HostVans/VanDetails';
import VanDetailsPricing from './Components/HostVans/VanDetailsPricing';
import VanDetailsPhotos from './Components/HostVans/VanDetailsPhotos';
import Login from './pages/Login';
import Auth from '../Server/Auth';


      
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
        <Route path="*" element={   <> <h1>Page not found!</h1> 
                                    <Link to={'/'}><button> return Home</button></Link>
                                  </> } />

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="login" element={<Login />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route element={<Auth />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="/host/vans" element={<HostVans />} />
              <Route path="/host/vans/:id" element={<HostVansDetails />} >
                <Route index element={<VanDetails />} />
                <Route path='/host/vans/:id/pricing' element={<VanDetailsPricing />} />
                <Route path='/host/vans/:id/photos' element={<VanDetailsPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App