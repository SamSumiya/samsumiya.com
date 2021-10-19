import React from 'react'
import About from '../display/About'; 
import Portfolio from '../display/Portfolio'; 
import Contact from '../display/Contact'; 
import styles from './Header.css'

const Header = () => {
  return (
    <>
      <div className={styles['main-header']}>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default Header
