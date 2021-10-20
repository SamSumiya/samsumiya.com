import React from 'react'
import About from '../display/About'; 
import Portfolios from '../display/Portfolios'; 
import Contact from '../display/Contact'; 
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className={'main-header'}>
        <Link to="/about">
          <About />
        </Link>
        <Link to="/portfolios">
          <Portfolios />
        </Link>
        <Link to="/contact">
          <Contact />
        </Link>
      </div>
    </>
  );
}

export default Header
