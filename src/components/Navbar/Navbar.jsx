import React from 'react'
import Logo from './Logo'
import Links from './Links'
const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className="container-fluid">
            <Logo />
            <Links />
        </div>
    </div>
  )
}

export default Navbar
