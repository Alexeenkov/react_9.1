import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import DriftPage from './pages/DriftPage/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage/TimeAttackPage';
import ForzaPage from './pages/ForzaPage/ForzaPage';

function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
