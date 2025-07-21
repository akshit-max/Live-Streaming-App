import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../assets/bg.jpeg'
const Home = () => {
  return (
    <>
    <div>
    <div className="hero">
      <div className="content">
        <h1 className="fade-in">
          Stream Anywhere, Anytime For <span>FREE</span>
        </h1>
        <p className='fade-in delay-1'>
        Live Streaming Made Easy
        </p>
        <Link className="btn fade-in delay-2" to="/live-stream" >Get Started</Link>
      </div>
      <div className="image-container slide-in">
        <img src={BG}
        alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
