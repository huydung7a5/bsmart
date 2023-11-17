import logo from './logo.svg';
import './App.css';
import Index from './Components/Index/Index';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, BrowserRouter } from 'react-router-dom';
import Frontend from './Components/FrontEnd/Frontend';
import BackEnd from './Components/BackEnd/BackEnd';
import Test from './Components/Index/Test';
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
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
