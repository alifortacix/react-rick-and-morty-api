import React, {useState} from 'react'
import Logo from './Logo'
import Links from './Links'
const Navbar = (props) => {
  return (
    <div className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className="container-fluid">
            <Logo />
            <Links setQuery={props.setQuery} />
        </div>
    </div>
  )
}

export default Navbar
