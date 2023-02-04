import React from 'react'
import greekSalad from '../../assets/greek salad.jpg';
import bruschetta from '../../assets/bruchetta.jpg';
import lemonDessert from '../../assets/lemon dessert.jpg';
import Card from '../Card';

const highlights = [
  {
    title: 'Greek salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    title: 'Bruschetta',
    price: 5.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruschetta,
  },
  {
    title: 'Lemon Dessert',
    price: 5.00,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessert,
  },
]

export default function Highlights() {
  return (
    <section id="highlights">
      <div className='highlights-header'>
        <h1 className='display'>This weeks special</h1>
        <button className='btn'>Online Menu</button>
      </div>
      <div className='highlights-body'>
        { highlights.map((highlight) =>
            <Card {...highlight} />
        ) }
      </div>
    </section>
  )
}
