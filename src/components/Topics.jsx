import React, { useState } from 'react'
import { topic_1, topic_2, topic_3, topic_4, Thumbnail, Group_8  } from "../assets/index"
import "./Topics.css"

const Topics = () => {

  const [currentImage , setCurrentImage] = useState(topic_1);

  return (
    <section id='topics' className='black'>
      <div className="wrapper">
        <h2>What you will learn?</h2>
        <div className="content-container">

          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(topic_2)}>What are the frequencies</li>
            <li onMouseEnter={() => setCurrentImage(topic_1)}>Using Daws</li>
            <li onMouseEnter={() => setCurrentImage(topic_3)}>Vocal Processing</li>
            <li onMouseEnter={() => setCurrentImage(topic_4)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(topic_2)}>Mastering</li>
          </ul>

          <div className="topic-image">
          <img src={currentImage} alt="" />
          </div>

        </div>
        <img src={Group_8} alt="" className='vector-image' />
      </div>
    </section>
  )
}

export default Topics