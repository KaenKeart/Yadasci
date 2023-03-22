import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Router from './Router';
import Project from './Project_01';
import Page01 from './Page01';
import Page02 from './Page02';
import Page03 from './Page03';
import Page04 from './Page04';
//import Home from './Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Project />} />
      <Route path="/page01" element={<Page01 />} />
      <Route path="/page02" element={<Page02 />} />
      <Route path="/page03" element={<Page03 />} />
      <Route path="/page04" element={<Page04 />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();