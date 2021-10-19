import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import styles from './Footer.css';
import { IconContext } from 'react-icons';

const Footer = () => {

  return (
    <div style={{ marginTop: '20rem'}}>
      <IconContext.Provider value={{ className: 'linkedin-icon' }}>
        <a
          href="https://www.linkedin.com/in/samsumiya/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {' '}
          <FaLinkedinIn />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'github-icon' }}>
        <a
          href="https://github.com/SamSumiya"
          target="_blank"
          rel="noreferrer noopener"
        >
          {' '}
          <FaGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: 'twitter-icon' }}>
        <a
          href="https://twitter.com/devchen1"
          target="_blank"
          rel="noreferrer noopener"
        >
          {' '}
          <FaTwitter />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
