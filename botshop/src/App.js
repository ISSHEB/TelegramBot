import './App.css';
import React, { useEffect } from 'react';

import Home from './pages/Home.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage.jsx';
import RoutinesPage from './pages/RoutinesPage.jsx';
import ScanQRPage from './pages/ScanQRPage.jsx';
import AddPhotoPage from './pages/AddPhotoPage.jsx';

const tg = window.Telegram.WebApp
// useEffect(() => { console.log(tg,'ffkf')},[])

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  // const onClose = () => {
  //   tg.close()
  // };
  return (

    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/routines" element={<RoutinesPage />} />
          <Route path="/addPhoto" element={<AddPhotoPage />} />
          <Route path="/Scan" element={<ScanQRPage />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
