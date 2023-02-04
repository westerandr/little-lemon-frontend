import React from 'react'
import aboutOne from '../../assets/Mario and Adrian A.jpg';
import aboutTwo from '../../assets/Mario and Adrian b.jpg';

export default function Chicago() {
  return (
    <section id="about">
      <div className='about-info'>
        <h1 className='display text-primary-color'>Little Lemon</h1>
        <h2 style={{fontWeight: 400}} className='subtitle text-primary-color-2'>Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className='about-images'>
        <img src={aboutTwo} alt="Mario and Adrian B" />
        <img src={aboutOne} alt="Mario and Adrian A" />
      </div>
    </section>
  )
}
