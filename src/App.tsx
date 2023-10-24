import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from 'pages/Home/Home.component';
import Cat from 'pages/Cat/Cat.component';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/cat'
            element={<Cat />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
