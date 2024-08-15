import React from 'react'
import "./Testimonials.css"
import { Rectangle_19,Rectangle_19_2, Rectangle_19_3 } from "../assets/index"

const Testimonials = () => {
  return (
    <section id='testimonials' className='gray'>
      <div className="wrapper">

        <h2>What our students say?</h2>

        <div className="content-container">

          <div className="student-post">
            <img src={Rectangle_19} alt="" />
            <h3 className='name'>Peter Adams</h3>
            <p className='review'>This is a great course,i got to learn alot.</p>
          </div>

          <div className="student-post">
            <img src={Rectangle_19_3} alt="" />
            <h3 className='name'>Robert Fox</h3>
            <p className='review'>I got to learn alot about music production from this course. Thanks:)</p>
          </div>

          <div className="student-post">
            <img src={Rectangle_19_2} alt="" />
            <h3 className='name'>Emily Smith</h3>
            <p className='review'>Awesome! Great Job!!</p>
          </div>

         


        </div>


      </div>
    </section>
  )
}

export default Testimonials