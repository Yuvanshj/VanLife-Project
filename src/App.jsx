import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

import Home from './pages/Home'
import About from "./pages/About";
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
      
function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        
          <Routes>
              
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={ <About />} />
              <Route path='/vans' element={ <Vans />} />
              <Route path='/vans/:id' element={ <VanDetail />} />

          </Routes>

          <Footer/> 
      </BrowserRouter>
    </>
  )
}
export default App