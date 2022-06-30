import React from 'react';
import {Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='detail/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
