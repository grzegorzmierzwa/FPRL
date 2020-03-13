import React from 'react';

import styles from'./App.module.scss';

function Home() {
  return (
    <div className={styles.App}>
      <div className={styles.about}>
          <div className={styles.info}>
            <p>
              <strong>
                Zmieniamy się dla Was. Ze względu na ekspansję firmy na polski rynek, nasza strona jest tymczasowo przebudowywana. Zapraszamy 1 kwietnia 2020 r.
              </strong>
            </p>
          </div>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>O NAS</h3>
        </div>
        <div className={styles.content}>
          <p>
            FUTURE WAY PRL LTD jest firmą stworzoną przez profesjonalistów, którzy wykorzystując przez lata gromadzone doświadczenie proponują najbardziej innowacyjne rozwiązania, zawsze dopasowane do indywidualnych potrzeb naszego Klienta.
          </p>
        </div>
      </div>

      <div className={styles.reference}>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>WSPÓŁPRACA</h3>
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
          <h3 className={styles.title}>OFERTA</h3>
        </div>
        <div className={styles.content}>
          <p>
            Nasza firma oferuje pełny zakres skutecznych i sprawdzonych rozwiązań serwisowych 
            które gwarantują wzrost konkurencyjności 
            i maksymalną produktywność Twojego przedsiębiorstwa. Naszym głównym obszarem działań jest, utrzymanie ruchu, 
            diagnostyka, wsparcie konstruktorskie, 
            zarządzanie infrastrukturą budynkową oraz specjalistyczne szkolenia.
          </p>
          <p>
            Jesteśmy prężnie rozwijającą się organizacją z sektora przemysłowego. 
            Ciągłe wyzwania rodzące duże możliwości, dają nam nieustaną motywacje, 
            dzięki której każdego dnia poszerzamy nasze horyzonty. Nowoczesne 
            i nieszablonowe podejście czyni nas specjalistami od zadań niewykonalnych. 
          </p>
          <p>
            Posiadamy wysoko wykwalifikowaną kadrę pracowników 
            oraz własne centrum logistyczne 
            aby do minimum ograniczyć czas reakcji na zapytania naszych partnerów.
          </p>
        </div>
      </div>

      <div className={styles.realizations}>
        <div className={styles.panelBar}>
          <h3 className={styles.title}>REALIZACJE</h3>
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
          <h3 className={styles.titleContact}>KONTAKT</h3>
        </div>
        <div className={styles.content}>
          <p>
            Numer telefonu: +48 727 999 990
          </p>
          <p>
            E-mail: office@fprl.eu
          </p>
          <p>
            Adres: 107 Narborough Road, Leicester
          </p>
        </div>
      </div>

    </div>  
  );
}

export default Home;
