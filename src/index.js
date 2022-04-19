import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import GlobalStyles from './global.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

