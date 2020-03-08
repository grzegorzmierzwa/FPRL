import React from 'react';

import './App.scss';

function HomeEn() {
  return (
    <div className='App'>
      <div className='about'>
        <div className='panelBar'>
          <h3 className='title'>ABOUT US</h3>
        </div>
        <div className='content'>
          <p>
          FUTURE WAY PRL LTD is a company created by professionals using the experience accumulated over the years to propose the most innovative solutions, which always meets the individual needs of our client.
          </p>
        </div>
      </div>

      <div className='reference'>
        <div className='panelBar'>
          <h3 className='title'>COOPERATION</h3>
        </div>
        <div className='content content-img'>
          <div className='img-container'>
            <img src='./images/logo-client-1.png' className='client-img img-1' alt='client logo'/>
            <img src='./images/logo-client-2.png' className='client-img img-2' alt='client logo'/>
            <img src='./images/logo-client-3.png' className='client-img img-3' alt='client logo'/>
          </div>
          <div className='img-container'>
            <img src='./images/logo-client-4.jpg' className='client-img img-4' alt='client logo'/>
            <img src='./images/logo-client-5.svg' className='client-img img-5' alt='client logo'/>
            <img src='./images/logo-client-6.png' className='client-img img-6' alt='client logo'/>
          </div> 
          <div className='img-container'>
            <img src='./images/logo-client-7.png' className='client-img img-7' alt='client logo'/>
            <img src='./images/logo-client-8.jpg' className='client-img img-8' alt='client logo'/>
            <img src='./images/logo-client-9.jpg' className='client-img img-9' alt='client logo'/>
          </div> 
          <div className='img-container'>
            <img src='./images/logo-client-10.jpg' className='client-img img-10' alt='client logo'/>
          </div> 
        </div>
      </div>

      <div className='offer'>
        <div className='panelBar'>
          <h3 className='title'>OFFER</h3>
        </div>
        <div className='content'>
          <p>
            Our company offers a full range of effective and reliable service solutions that guarantee the increase 
            of competitiveness and maximum productivity of your business. 
            Our main area of activity is maintenance, diagnostics, construction support, 
            building infrastructure management and running specialized trainings. 
          </p>
          <p>
            We are a dynamically developing organization from the industrial sector. Constant challenges are 
            giving us great opportunities and constant motivation, which helps us expand our horizons every day. 
            A modern and unconventional approach makes us specialists in impossible tasks. 
          </p>
          <p>
            We have a highly qualified staff and our own logistics center to minimize the time to response our partners' queries.
          </p>
        </div>
      </div>

      <div className='realizations'>
        <div className='panelBar'>
          <h3 className='title'>PROJECTS</h3>
        </div>
        <div className='content content-img'>
          <div className='img-container'>
            <img src='./images/portfolio-1.jpeg' className='portfolio-img img-1' alt='foto'/>
            <img src='./images/portfolio-2.jpeg' className='portfolio-img img-2' alt='foto'/>
            <img src='./images/portfolio-3.jpeg' className='portfolio-img img-3' alt='foto'/>
          </div>
          <div className='img-container'>
            <img src='./images/portfolio-4.jpeg' className='portfolio-img img-4' alt='foto'/>
            <img src='./images/portfolio-5.jpeg' className='portfolio-img img-5' alt='foto'/>
            <img src='./images/portfolio-6.jpeg' className='portfolio-img img-6' alt='foto'/>
          </div>

        </div>
      </div>

      <div className='contact'>
        <div className='panelBar-contact'>
          <h3 className='title-contact'>CONTACT</h3>
        </div>
        <div className='content'>
          <p>
            Phone number: +48 727 999 990
          </p>
          <p>
            E-mail: office@fprl.eu
          </p>
          <p>
            Address: 107 Narborough Road, Leicester
          </p>
        </div>
      </div>

    </div>  
  );
}

export default HomeEn;
