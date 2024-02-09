
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rating from './components/rating';
import Home from './components/home';
import './style/style.css'



const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/rating" element={<Rating/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
