import React from 'react';
import Logo from './Logo';
import Links from './Links';
import Menu from './Menu';

const Header = ({ header }) => {

  return (
    <div className="header">
      <Logo img={header.logo.img} />
      <Links links={header.links} />
      <Menu menu={header.menu} />
    </div>
  );
};

export default Header;

