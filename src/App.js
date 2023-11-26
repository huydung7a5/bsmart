import logo from './logo.svg';
import './App.css';
import Index from './Components/Index/Index';
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes, BrowserRouter } from 'react-router-dom';
import IndexFE from './Components/FrontEnd/IndexFE';
import BackEnd from './Components/BackEnd/BackEnd';
import IndexDetail from './Components/Detail/IndexDetail';
import React from 'react'
function App() {
  return (
    <div className="container">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/frontend" element={<IndexFE />} />
            <Route path="/backend" element={<BackEnd />} />
            <Route path="/detail/:id" element={<IndexDetail />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    
    </div>
  );
}

export default App;
