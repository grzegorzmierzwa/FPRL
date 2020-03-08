import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <header >
        <img src='./images/logo.png' alt='logo' />
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
      <div className='about'>
        <div className='panelBar'>
          <h3 className='title'>O NAS</h3>
        </div>
        <div className='content'>
          <p>
            FUTURE WAY PRL LTD jest firmą stworzoną przez profesjonalistów, którzy wykorzystując przez lata gromadzone doświadczenie proponują najbardziej innowacyjne rozwiązania, zawsze dopasowane do indywidualnych potrzeb naszego Klienta.
          </p>
        </div>
      </div>

      <div className='reference'>
        <div className='panelBar'>
          <h3 className='title'>WSPÓŁPRACA</h3>
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
          <h3 className='title'>OFERTA</h3>
        </div>
        <div className='content'>
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

      <div className='realizations'>
        <div className='panelBar'>
          <h3 className='title'>REALIZACJE</h3>
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
          <h3 className='title-contact'>KONTAKT</h3>
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

export default App;
