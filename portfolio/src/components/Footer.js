import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import styles from './Footer.css';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ className: 'main-icons' }}>
        <IconContext.Provider value={{ className: 'linkedin-icon' }}>
          <FaLinkedinIn />
        </IconContext.Provider>
        <div>
          <FaGithub />
        </div>
        <div>
          <FaTwitter />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
