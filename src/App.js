import React, {useState} from 'react';
import {Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import PageNotFound from './pages/Page404'
import './App.css';



function App() {
  const [query, setQuery] = useState([])
  function handleKey(e){
      setQuery(e.target.value.toLowerCase())
      console.log(query)
  }
  return (
    <div className="App">
      <Navbar handleKey={handleKey}></Navbar>
      <Routes>
        <Route path='/' element={<Home query={query} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='detail/:id' element={<Detail />}></Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
