import React from 'react';
import './HomepageButton.css';
import './UeberMichButton.css';
import './WarenkorbButton.css';

const NavigationButtons = () => {
  return (
    <div>
      <button className="homepage-button" onClick={() => window.location.href = '/'}>Homepage</button>
      <button className="uebermich-button" onClick={() => window.location.href = '/ueber-mich'}>Über mich</button>
      <button className="warenkorb-button" onClick={() => window.location.href = '/warenkorb'}>Warenkorb</button>
    </div>
  );
}

export default NavigationButtons;
