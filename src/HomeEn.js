import React from 'react';

import styles from'./App.module.scss';

function HomeEn() {
  return (
    <div className={styles.App}>
      <div className={styles.about}>
          <div className={styles.info}>
            <p>
              <strong>
                We are changing for You. Due to the company's expansion into the Polish market, our website is temporarily under reconstruction. See you 1st of April 2020.
              </strong>
            </p>
          </div>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>ABOUT US</h3>
        </div>
        <div className={styles.content}>
          <p>
            FUTURE WAY PRL LTD is a company created by professionals using the experience accumulated over the years to propose the most innovative solutions, which always meets the individual needs of our client.
          </p>
        </div>
      </div>

      <div className={styles.reference}>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>COOPERATION</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <div className={styles.imgContainer}>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-1.png' className={styles.img1} alt='client logo'/>
              </div>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-2.png' className={styles.img2} alt='client logo'/>
              </div>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-3.png' className={styles.img3} alt='client logo'/>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-4.jpg' className={styles.img4} alt='client logo'/>
              </div>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-5.svg' className={styles.img5} alt='client logo'/>
              </div>
              <div className={styles.clientImg}> 
                <img src='./images/logo-client-6.png' className={styles.img6} alt='client logo'/>
              </div>
            </div> 
            <div className={styles.imgContainer}>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-7.png' className={styles.img7} alt='client logo'/>
              </div>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-8.jpg' className={styles.img8} alt='client logo'/>
              </div>
              <div className={styles.clientImg}>
                <img src='./images/logo-client-9.jpg' className={styles.img9} alt='client logo'/>
              </div>
            </div> 
            <div className={styles.imgContainer}>
              <img src='./images/logo-client-10.jpg' className={styles.img10} alt='client logo'/>
            </div> 
          </div>
        </div>
      </div>

      <div className={styles.offer}>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>OFFER</h3>
        </div>
        <div className={styles.content}>
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

      <div className={styles.realizations}>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>PROJECTS</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <div className={styles.imgContainer}>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-1.jpeg' className={styles.img} alt='foto'/>
              </div>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-2.jpeg' className={styles.img} alt='foto'/>
              </div>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-3.jpeg' className={styles.img} alt='foto'/>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-4.jpeg' className={styles.img} alt='foto'/>
              </div>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-5.jpeg' className={styles.img} alt='foto'/>
              </div>
              <div  className={styles.portfolioImg}>
                <img src='./images/portfolio-6.jpeg' className={styles.img} alt='foto'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.panelBarContact}>
          <h3 className={styles.titleContact}>CONTACT</h3>
        </div>
        <div className={styles.content}>
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
