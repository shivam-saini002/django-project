import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/HeroSection";
import About from "./components/About";
import MyBlog from "./components/MyBlog";
import Contact from "./components/Contact";
import Each from "./components/Each";

//Starting point of our app
//document ready

function App() {
  return (
    <div>
      <Router>
        <div>
          
          <Navbar />
          

          <Routes>
            <Route exact path="/" element={<Footer />} />
            <Route path="/MyBlog" element={<MyBlog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
         
            <Route path="/each/:id" element={<Each />} />
          </Routes>
        </div>
      </Router>

      

      <br />
    </div>

    //define all routes 
  );
}

export default App;
