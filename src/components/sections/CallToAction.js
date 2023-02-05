import React from 'react'
import heroImage from '../../assets/restauranfood.jpg'
import { useNavigate } from 'react-router-dom'

export default function CallToAction() {
  const navigate = useNavigate()
  const goToBookingPage = () => {
    navigate('/booking')
  }

  return (
    <section id="hero">
      <div id="hero-inner-container">
        <div id="hero-col-1">
          <div>
            <h1 className='display text-primary-color-2'>Little Lemon</h1>
            <h2 className='subtitle text-highlight-color-1'>Chicago</h2>
            <p className='paragraph text-highlight-color-1'>We are a family owned Mediterranean<br /> restaurant, focused on traditional<br /> recipes with a modern twist</p>
          </div>
          <button aria-label="On Click" onClick={goToBookingPage} className="btn">Reserve a Table</button>
        </div>
        <div id="hero-col-2">
          <img src={heroImage} alt="Chef serving entree on platter" />
        </div>
      </div>
    </section>
  )
}
