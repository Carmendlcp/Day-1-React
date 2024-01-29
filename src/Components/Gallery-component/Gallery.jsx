// Gallery.jsx
import React from 'react';
import Card from './Card';

const Gallery = ({ gallery }) => {
  return (
    <div className="gallery">
      {gallery.map((item, index) => (
        <Card key={index} card={item.card} />
      ))}
    </div>
  );
};

export default Gallery;

