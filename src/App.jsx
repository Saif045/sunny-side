import React from "react";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>

      <Footer />
    </ >
  );
};

export default App;
