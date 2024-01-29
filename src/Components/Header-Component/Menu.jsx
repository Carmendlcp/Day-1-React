import React from 'react';

const Menu = ({ menu }) => {
  return (
    <div className="menu">
      {menu.map((menuItem, index) => (
        <a key={index} href={menuItem.url}>{menuItem.text}</a>
      ))}
    </div>
  );
};

export default Menu;
