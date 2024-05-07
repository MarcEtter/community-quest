import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';


function App() {
  return (
  <div>
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
    </Router>

  </div>
  );
}

export default App;
