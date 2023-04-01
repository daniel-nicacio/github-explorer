import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import Repository from './pages/Repository';

import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/repository" element={<Repository />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
