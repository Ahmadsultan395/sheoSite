import React from 'react'
import "./Hero.css"
import sheoImage from "./assets/shoe_image.png"

function Hero() {
  return (
    <section className='hero'>
        <div className='hero-divs'>
            <div className='hero-1'>
                <h1>Your feet deserve the best</h1>
                <p className='text-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A delectus quasi soluta distinctio et natus quaerat? Rem autem suscipit ipsum?
                </p>
                <div className='btns'>
                    <button className='btn-1'>Shop Now</button>
                    <button className='btn-2'>Category</button>
                </div>
                <h5>Also available on </h5>
            </div>

            <div className='hero-2'>
                <img src={sheoImage} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero