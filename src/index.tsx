import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import './styles/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';

 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  </Router>
); 

reportWebVitals();
