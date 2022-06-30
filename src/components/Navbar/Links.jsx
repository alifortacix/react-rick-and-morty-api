import React from 'react'
import {Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../../pages/Home'
import About from '../../pages/Home'


const Links = (props) => {
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
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={props.checkProperty} />
            <button className="btn btn-outline-warning" type="submit" onClick={props.handleSubmit}>Search</button>
        </form>
    </div>
  )
}

export default Links
