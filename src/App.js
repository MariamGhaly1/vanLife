import './App.css';

import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex-wrapper">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/about" element={<About/>}/> 
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
