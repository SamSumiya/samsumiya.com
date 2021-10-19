import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <div>
      <IconContext.Provider value={{ className: 'linkedin-icon' }}>
        <FaLinkedinIn />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'github-icon' }}>
        <FaGithub />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'twitter-icon' }}>
        <FaTwitter />
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
