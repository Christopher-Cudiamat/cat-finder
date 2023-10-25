import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from 'themeGlobal/themeGlobal';
import GlobalContextProvider from 'hooks/useGlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import Home from 'pages/Home/Home.component';
import Cat from 'pages/Cat/Cat.component';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </GlobalContextProvider>
    </React.Fragment>
  );
};

export default App;
