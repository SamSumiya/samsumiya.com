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
        <div>
          <a href="https://www.linkedin.com/in/samsumiya/">
            <FaLinkedinIn />
          </a>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'github-icon' }}>
        <a href="https://github.com/SamSumiya">
          <FaGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'twitter-icon' }}>
        <a href="https://twitter.com/devchen1">
          <FaTwitter />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
