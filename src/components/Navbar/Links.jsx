import React, {useState} from 'react'
import {Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../../pages/Home'
import About from '../../pages/Home'


const Links = (props) => {
    /* const handleSubmit = (e) =>{
        props.func = (e.target.value)
        console.log(e.target.value)
    }

    const checkProperty = (e) =>{
        props.func = (e.target.value)
        console.log(e.target.value)
    } */


  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className='nav-item p-3'>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item p-3'>
                <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li className='nav-item p-3'>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
        </ul>
        <div>
            <input className="search-input" type="search" placeholder="Search" aria-label="" onKeyUp={props.func} />
        </div>
    </div>
  )
}

export default Links
