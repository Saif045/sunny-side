import React from 'react'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


const App = () => {
  return (  
      <Router>
        <ScrollToTop />
        <Header />

           <Routes>

             <Route path="/" element={<Home />}> </Route>

             <Route path="/about" element={<About />}> </Route>

             <Route path="/contact" element={<Contact />}> </Route>

           </Routes>

          <Footer />
          
       </Router>
  )
}

export default App