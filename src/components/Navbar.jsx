import React, { useState } from 'react'
import "./Navbar.css"
import { icon } from '../assets/index'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <nav>
      <a href="#" className='logo'>Fanno<span className='red'>XMusic</span> </a>
      <ul className='navbar-items'>
      <li><a href="#topics">Course Details</a></li>
      <li><a href="#info">Info</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <img src={icon} alt="icon" className='icon' onClick={() =>setIsActive(true)} />
    </nav>
    <div className={`menu-container ${ isActive ? "active" : "" }`}>

      <div className="menu-icon">
        <img src={icon} alt="" onClick={() =>setIsActive(false)} />
      </div>

      <ul className='menu-items'>
      <li><a href="#topics" onClick={() =>setIsActive(false)}>Course Details</a></li>
      <li><a href="#info" onClick={() =>setIsActive(false)}>Info</a></li>
      <li><a href="#blog" onClick={() =>setIsActive(false)}>Blog</a></li>
      <li><a href="#testimonials" onClick={() =>setIsActive(false)}>Testimonials</a></li>
      </ul>

    </div>
    </>
  )
}

export default Navbar