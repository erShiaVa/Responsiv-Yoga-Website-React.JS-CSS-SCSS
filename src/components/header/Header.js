import React, { useState } from 'react';
import './header.scss';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <div className='header__nav'>
      <h1 className='header__logo'>Yoga.</h1>
      {navOpen ? (
        <HiOutlineX 
            className='header__icon'
            onClick={handleNavToggle} size={25} />
      ) : (
        <HiOutlineMenuAlt3 
            className='header__icon'
            onClick={handleNavToggle} size={25} />
      )}
      <div className={`header__items ${navOpen ? 'header__items--active' : 'header__items--hidden'}`}>
        <ul>
          <li className='header__item'>Home</li>
          <li className='header__item'>Classes</li>
          <li className='header__item'>Retreat</li>
          <li className='header__item'>Booking</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;