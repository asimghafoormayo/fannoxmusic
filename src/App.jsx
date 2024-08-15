import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Topics from "./components/Topics"
import Info from "./components/Info"
import Blog from "./components/Blog"
import Testimonials from "./components/Testimonials"
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Hero></Hero>
    <Topics></Topics>
    <Info></Info>
    <Blog></Blog>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default App