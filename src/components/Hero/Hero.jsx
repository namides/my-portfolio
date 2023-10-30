import React from 'react'
import "./Hero.scss"
import Myimg from "../../img/myimage.jpg"

function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
      <div className="textContainer">
        <h2>Abdulazizov Muhammadiy</h2>
        <h1>FrontEnd Developer</h1>
        <div className="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
      </div>
      </div>
      <div className="imageContainer">
        <img src={Myimg} alt="" />
      </div>
    </div>
  )
}

export default Hero