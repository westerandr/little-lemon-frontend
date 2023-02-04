import React from 'react'

export default function PageTitle({ title, description, image}) {
  return (
    <section className='page-title-container'>
    <div className="page-title-inner-container">
        <div>
          <h1 className='display text-primary-color-2'>{title}</h1>
          <p className='paragraph text-highlight-color-1'>{description}</p>
        </div>
     <div>
        <img src={image} alt="" />
      </div>
    </div>
  </section>
  )
}
