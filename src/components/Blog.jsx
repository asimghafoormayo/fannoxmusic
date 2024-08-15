import React from 'react'
import "./Blog.css"
import { Thumbnail_1, Thumbnail_2, Thumbnail } from "../assets/index"

const Blog = () => {
  return (
    <section id='blog' className='light-red'>
      <div className="wrapper">
        <h2>Posts</h2>
        <div className="content-container">

          <div className="post">
            <h4 className='tag'>VOX</h4>
            <img src={Thumbnail_2} alt="" />
            <h3>How to use Drum Machine in Logic X Pro</h3>
          </div>

          <div className="post">
          <h4 className='tag'>DAWN</h4>
            <img src={Thumbnail_1} alt="" />
            <h3>How to Mix Guitars Effectively</h3>
          </div>

          <div className="post">
          <h4 className='tag'>GIX</h4>
            <img src={Thumbnail} alt="" />
            <h3>The Real Power of Harmonies in Music Production</h3>
          </div>

        </div>
        <div className='btn-container'>
        <button className='allposts'>All Posts</button>
        </div>
      </div>
    </section>
  )
}

export default Blog