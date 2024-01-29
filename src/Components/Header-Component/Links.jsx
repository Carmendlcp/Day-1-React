// Links.jsx
import React from 'react';

const Links = ({ links }) => {
  return (
    <div className="links">
      {links.map((link, index) => (
        <a key={index} href={link.url}>{link.text}</a>
      ))}
    </div>
  );
};

export default Links;
