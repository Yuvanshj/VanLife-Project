import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

import Home from './pages/Home'
import About from "./pages/About";
import Vans from './pages/Vans';
      
function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        
          <Routes>
              
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={ <About />} />
              <Route path='/vans' element={ <Vans />} />

          </Routes>

          <Footer/> 
      </BrowserRouter>
    </>
  )
}
export default App