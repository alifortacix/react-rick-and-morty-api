import React from 'react'
import Image from '../img/pp.png'
const Contact = () => {

  const imgStyle = {
    "width" : "200px",
    "height" : "200px",
    "borderRadius" : "200px",
    "objectFit" : "cover",
    "marginBottom" : "10px"
  }

  return (
      <div className='d-flex flex-column justify-content-center align-items-center pt-100'>
        <h1 className='display-6 fw-light'>Ali Fortacı</h1>
        <img src={Image} style={imgStyle} alt="Ali Fortacı" />
        <p className='fst-italic text-muted'>Software Developer</p>
        <p className='lead text-muted fs-6 w-25'>Hello I'm Ali. 23 years old. I'm a software developer. I follow football, basketball, volleyball etc. I'm fan of Fenerbahçe. I really enjoy watching football. sometimes i read a book. I like research web tech. I interested new tech. I'm currently learning reactjs now. </p>
        <div className='py-3 w-25 fst-italic left'>
            <i class="fa-brands fa-github-square pe-1 fa-2xl"></i>
            <a className='text-decoration-none' href="https://www.github.com/alifortacix"><span className='fw-bold text-dark'>Github</span></a>
        </div>
        <div className='py-3 w-25 fst-italic text-left'>
            <i class="fa-brands fa-linkedin pe-1 fa-2xl"></i>
            <a className='text-decoration-none' href="https://www.linkedin.com/in/alifortacix"><span className='fw-bold text-dark'>Linkedin</span></a>
        </div>
        <div className='py-3 w-25 fst-italic text-left'>
          <i class="fa-solid fa-square-envelope pe-1 fa-2xl"></i>
          <a className='text-decoration-none' href="mailto:alifortacix@outlook.com"><span className='fw-bold text-dark'>alifortacix@outlook.com</span></a>
        </div>
        <div className='py-3 w-25 fst-italic text-left'>
          <i class="fa-solid fa-square-phone pe-1 fa-2xl"></i>
          <a className='text-decoration-none' href="tel:+905456257775"><span className='fw-bold text-dark'>+90 545 625 77 75</span></a>
        </div>
      </div>
  )
}

export default Contact
