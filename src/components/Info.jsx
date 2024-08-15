import React from 'react'
import "./info.css"
import { student, Vector, Group_7_2 } from "../assets/index"

const Info = () => {
  return (
    <section id='info' className='gray'>
      <div className='wrapper'>
        <div className="content-container">

          <div className="info-content">
            <img src={student} alt="" />
            <h1>4600+</h1>
            <h1>Students</h1>
          </div>

          <div className="info-content">
            <img src={Vector} alt="" />
            <h1>46+ Hours</h1>
            <h1>Video</h1>
          </div>

        </div>
        <img src={Group_7_2} alt="image" className='vector-image' />
      </div>
    </section>
  )
}

export default Info