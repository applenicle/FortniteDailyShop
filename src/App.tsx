import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

declare global {
  interface Window {
    Telegram?: any;
  }
}

const telegram = window.Telegram.WebApp;

// console.log(telegram);

const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
