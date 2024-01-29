import React from 'react'

const Promotion = ( {promotion} ) => {
  return (
    <div className="promotion">
    <p> {promotion.day} </p>
    <p> {promotion.title} </p>
    <p> {promotion.discount} </p>
    <p> {promotion.price} </p>
    <img src={promotion.background} alt={promotion.title}  />
    </div>
  )
}

export default Promotion

