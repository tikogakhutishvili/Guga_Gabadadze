import React from 'react';
import { Link } from 'react-router-dom';
import './headerstyle.css';
import './header-res.css';

const Navbar = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <ul className="nav-links-res">
      <li>
        <Link to="/projects" className='link' onClick={handleLinkClick}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="/about" className='link' onClick={handleLinkClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contacts" className='link' onClick={handleLinkClick}>
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
