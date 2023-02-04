import React from 'react'
import { ReactComponent as StarFilledIcon } from '../assets/star-filled.svg';
import { ReactComponent as StarOutlineIcon } from '../assets/star-outline.svg';

export default function Testimony({ rating, name, image, review}) {
  const ratings = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratings[i] = true;
  }

  return (
    <div className='testimony'>
      <div className='rating'>
        {ratings.map((star, index) => {
          if(star){
            return <StarFilledIcon key={index} />
          }else{
            return <StarOutlineIcon key={index} />
          }
        })}
      </div>
      <div className='person'>
        <img src={image} alt={name} />
        <h6>{name}</h6>
      </div>
      <div className='review'>
        <p>
        {review}
        </p>
      </div>
    </div>
  )
}
