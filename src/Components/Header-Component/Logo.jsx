import React from 'react';

const Logo = ({ img }) => {
  return (
    <div className="logo">
      <img src={img} alt="Logo" />
    </div>
  );
};

export default Logo;
