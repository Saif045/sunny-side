import React, { Component } from 'react'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
  return (  
      <Router>

        <Header />

           <Routes>

             <Route path="/" element={<Home />}> </Route>

             <Route path="/about" element={<About />}> </Route>

             <Route path="/services" element={<Services />}> </Route>

             <Route path="/contact" element={<Contact />}> </Route>

           </Routes>

          <Footer />
          
       </Router>
  )
}

export default App