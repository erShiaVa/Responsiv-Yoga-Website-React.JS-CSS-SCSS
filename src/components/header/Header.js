import React, { useState } from 'react';
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div>
      <header className='header'>
        <nav className='navbar container'>
          <div className="logo">
            <h1>LOGO.</h1>
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
            <li>Home</li>
            <li>Classes</li>
            <li>Retreat</li>
            <li>Contact</li>
          </ul>
          <div className="hamburger">
            <AiOutlineMenu onClick={handleClick}/>    {/* src={images.hamburger} alt="#" */}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header