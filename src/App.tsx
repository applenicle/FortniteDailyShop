import React from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';

// declare global {
//   interface Window {
//     Telegram?: any;
//   }
// }

// const telegram = window.Telegram.WebApp;

// console.log(telegram);

const App: React.FC = () => {
  return (
    <div className="bg">
      <div className="container">
        <Header />
        <Card />
      </div>
    </div>
  );
};

export default App;
