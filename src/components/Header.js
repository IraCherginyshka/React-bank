import React from 'react';

const Header = ({ logo, title }) => {
  return (
    <header className="header">
      <span className="header__logo font-weight-bold">{logo} </span>
      <span className="header__title"> {title}</span>
    </header>
  );
}
export default Header;