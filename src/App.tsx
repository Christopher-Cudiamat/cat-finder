import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from 'themeGlobal/themeGlobal';
import Home from 'pages/Home/Home.component';
import Cat from 'pages/Cat/Cat.component';
import Header from 'components/Header/Header.component';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
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
      </ThemeProvider>
    </div>
  );
};

export default App;
