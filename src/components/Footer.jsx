import React from 'react'
import "./Footer.css"
import { instagram,facebook,twitter } from "../assets/index"

const Footer = () => {
  return (
    <footer className='black'>
      <div className="wrapper">
        
        <div className="main">

        <div className="one">

        <a href="#" className='logo'>Fanno<span className='red'>XMusic</span> </a>

        <div className="logos">
        <a href="#"><img src={instagram} alt="" /></a>
        <a href="#"><img src={facebook} alt="" /></a>
        <a href="#"><img src={twitter} alt="" /></a>        
        </div>

        <p className='one-text'>This website is designed by Asim Ghafoor &copy; 2024</p>


        </div>

        <div className="two">
        <h4 className='quick-links'>Quick Links</h4>
          <p className='two-text'>Blog</p>
          <p className='two-text'>Privacy</p>
        </div>
        
        <div className="three">
        <h4 className='contact'>Contact Us</h4>
          <p className='three-text'>fannoxmusic@gmail.com</p>
          <p className='three-text'>+920000000000</p>
        </div>

        <p className='footer-text'>This website is designed by Asim Ghafoor &copy; 2024</p>

        </div>

      </div>
    </footer>
  )
}

export default Footer