import React from 'react';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <header >
        <img src='./images/logo.png' alt='logo' />
        <h4 className='future'>Future is now...</h4>
      </header>
      <div className='about'>
        <div className='panelBar'>
          <h3 className='title'>O NAS</h3>
        </div>
        <div className='content'>
          <p>
          FPRL jest firmą stworzona przez profesjonalistów, którzy wykorzystując przez lata gromadzone doświadczenie proponują swojemu klientowi najbardziej innowacyjne,
          często nieszablonowe rozwiązania, zawsze dopasowane do indywidualnych potrzeb klienta.
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
            Nasza firma oferuje pełny zakres skutecznych i sprawdzonych rozwiązań serwisowych głównie dla firm z branży przemysłowej, 
            które gwarantują wzrost konkurencyjności i maksymalną produktywność Twojego przedsiębiorstwa. 
            Naszym głównym obszarem działań jest obsługa infrastruktury, utrzymanie ruchu, inżyniering i outsourcing.
          </p>
          <p>
            Nasza firma jest prężnie rozwijającą się organizacją z sektora logistycznego. 
            Ciągłe wyzwania, które rodzą duże możliwości, dają nam ciągłą, nieustaną motywacje, 
            dzięki której bezustannie poszerzamy nasze horyzonty. 
            Jeżeli uważasz ze czegoś się nie da zrobić, proszę daj nam przeanalizować temat.
          </p>
          <p>
            Nasze usługi dedykowane są pod naszego klienta. 
            Staramy się sprostać każdemu zadaniu, ale mamy też standardowe usługi. 
            Pakowanie asortymentu jak również, naprawa, malowanie, 
            pranie przekładek czy też pojemników oraz ich magazynowanie to nasza codzienność. 
            Posiadamy własne centrum logistyczne.
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
