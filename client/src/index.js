import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/Landing';
import Searching from './pages/Searching';
import Linear from './pages/Linear'
import Binary from './pages/Binary'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/search/linear" element={<Linear/>}/>
        <Route path = "/search/binary" element = {<Binary/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
