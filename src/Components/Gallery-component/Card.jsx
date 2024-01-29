// Card.jsx
import React from 'react';

const Card = ({ card }) => {
  const { title, discount, price, tag, img } = card;

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{`Descuento: ${discount}%`}</p>
      <p>{`Precio: ${price}`}</p>
      {tag && <p>{`Tag: ${tag}`}</p>}
    </div>
  );
};

export default Card;

