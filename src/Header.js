import React from 'react';
import { Link } from 'react-router-dom'

import styles from'./App.module.scss';


function Header() {
  return (
    <div className={styles.App}>
      <nav>
        <Link to='/' className={styles.linkPl}>PL</Link>
        <Link to='/en'>EN</Link>
      </nav>
      <header >
        <img src='./images/logo.jpg' alt='logo' className={styles.logo} />
        <h4 className={styles.future}>Future is now...</h4>
        <div className={styles.hastag}>
          <p>#Maintenance Management Systems</p>
          <p>#Lean Manufacturing</p>
          <p>#Total Productive Maintenance</p>
          <p>#KAIZEN</p>
          <p>#5 Why</p>
          <p>#SMED</p>
          <p>#GMP</p>
          <p>#ATS</p>
          <p>#CIL</p>
          <p>#VC</p>
          <p>#5S</p>
          <p>#OEE</p>
          <p>#CMS</p>
        </div>
      </header>
    </div>
  );
}

export default Header;