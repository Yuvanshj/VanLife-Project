import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

import Home from './Components/Home'
import About from "./Components/About";

      
function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        
          <Routes>
              
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={ <About />} />

          </Routes>

          <Footer/> 
      </BrowserRouter>
    </>
  )
}
export default App