import logo from './logo.svg';
import './App.css';
import Index from './Components/Index/Index';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, BrowserRouter } from 'react-router-dom';
import Frontend from './Components/FrontEnd/Frontend';
import BackEnd from './Components/BackEnd/BackEnd';
import DetailItem from './Components/Detail/DetailItem';
import React from 'react'
function App() {
  return (
    <div className="container">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/backend" element={<BackEnd />} />
            <Route path="/detail" element={<DetailItem />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    
    </div>
  );
}

export default App;
