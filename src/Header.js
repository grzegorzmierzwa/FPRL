import React from 'react';

import './App.scss';

function Header() {
  return (
    <div className='App'>
      <nav>

        {/* <a href='http://localhost:3000/' className='link-pl'>PL</a> */}
        {/* <a href='http://localhost:3000/en'>EN</a>  */}

        <a href='http://fprl.eu' className='link-pl'>PL</a>
        <a href='http://fprl.eu'>EN</a>

      </nav>
      <header >
        
        <img src='./images/logo.jpg' alt='logo' className='logo'/>
        <h4 className='future'>Future is now...</h4>
        <div className='hastag'>
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