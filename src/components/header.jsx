import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

import './headerstyle.css';
import './header-res.css';

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const closeNavLinks = () => {
    setShowNavLinks(false);
  };

  return (
    <header>
      <nav>
        <Link to="" className='name'>
          Guga Gabadadze
        </Link>
        <img
          className='toggle'
          src="./icons/menu.png"
          alt=""
          onClick={toggleNavLinks}
        />
        <ul className="nav-links">
          <li>
            <Link to="/projects" className='link' onClick={closeNavLinks}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className='link' onClick={closeNavLinks}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" className='link' onClick={closeNavLinks}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      {showNavLinks && <Navbar onClose={closeNavLinks} />}
    </header>
  );
};

export default Header;
