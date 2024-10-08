import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Sponsor from './pages/Sponsor';
import Galleri from './pages/Galleri';
import WT from './pages/Wt';
import Handbold from './pages/Handbold';
import Fodbold from './pages/Fodbold';
import Badminton from './pages/Badminton';
import Padel from './pages/Padel';
import Gymnastik from './pages/Gymnastik';
import Multibanen from './pages/Multibanen';
import Klubben from './pages/Klubben';

import './styles.css';
import './App.css';
import './navbar.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/Sponsor" element={<Sponsor />} />
          <Route path="/Galleri" element={<Galleri />} />
          <Route path="/Handbold" element={<Handbold />} />
          <Route path="/Fodbold" element={<Fodbold />} />
          <Route path="/Badminton" element={<Badminton />} />
          <Route path="/Padel" element={<Padel />} />
          <Route path="/Gymnastik" element={<Gymnastik />} />
          <Route path="/Wt" element={<WT />} />
          <Route path="/Multibanen" element={<Multibanen />} />
          <Route path="/Klubben" element={<Klubben />} />
        </Routes>
      </div>
    </>
  );
}

export default App;