import React from 'react'
import Testimony from '../Testimony'
const testimonies = [
  {
  rating: 4,
  image: 'https://randomuser.me/api/portraits/men/19.jpg',
  name: 'Romeo',
  review: 'I was extremely satisfied with the service and would highly recommend it to others.'
  },
  {
  rating: 5,
  image: 'https://randomuser.me/api/portraits/women/3.jpg',
  name: 'Juliet',
  review: 'I was blown away by the quality and professionalism of the team. Could not have asked for a better experience.'
  },
  {
  rating: 3,
  image: 'https://randomuser.me/api/portraits/men/79.jpg',
  name: 'Mercutio',
  review: 'The service was okay, not great but not terrible. I would use it again if necessary.'
  },
  {
  rating: 4,
  image: 'https://randomuser.me/api/portraits/men/70.jpg',
  name: 'Tybalt',
  review: 'I was pleasantly surprised by the level of care and attention I received. I would definitely use the service again in the future.'
  }
  ]

export default function CustomersSay() {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <div id="testimonials-inner">
        {testimonies.map((testimony, index) =>
          <Testimony key={index} {...testimony} />
        )}
      </div>
    </section>
  )
}
