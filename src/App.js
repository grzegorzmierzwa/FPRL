import React from 'react';

import style from './App.css';

function App() {
  return (
    <div className='App'>
      <header className={style.img}>
        <img src='./images/logo.png' alt='logo' />
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
          Ciągłe wyzwania, które rodzą duże możliwości, dają nam ciągłą, 
          nieustaną motywacje, dzięki której bezustannie poszerzamy nasze horyzonty. 
          Jeżeli uważasz ze czegoś się nie da zrobić, proszę daj nam przeanalizować temat.
          </p>
          <p>
          Nasze usługi dedykowane są pod naszego klienta. Staramy się sprostać każdemu zadaniu, 
          ale mamy też standardowe usługi. Pakowanie asortymentu jak również, naprawa, 
          malowanie, pranie przekładek czy też pojemników oraz ich magazynowanie to nasza codzienność. 
          Posiadamy własne centrum logistyczne.
          </p>
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
