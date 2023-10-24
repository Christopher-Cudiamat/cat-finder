import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from 'themeGlobal/themeGlobal';
import { useGlobalContext } from 'hooks/useGlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import Home from 'pages/Home/Home.component';
import Cat from 'pages/Cat/Cat.component';
import Header from 'components/Header/Header.component';

const App: React.FC = () => {
  const {
    globalState: { breedId },
  } = useGlobalContext();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home key={breedId} />}
            />
            <Route
              path='/cat'
              element={<Cat />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
