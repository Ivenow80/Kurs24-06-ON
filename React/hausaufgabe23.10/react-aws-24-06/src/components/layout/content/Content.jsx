import React from 'react';

import './Content.css'; // Importiere die CSS-Datei für diese Komponente, falls vorhanden

const Content = ({ children, buttonText = "Default Button Text", onButtonClick }) => {
  return (
    <div className="content-container"> {/* Verwende CSS-Klasse anstelle von styles.container */}
      <div className="content-body">{children}</div> {/* Optionaler Container für den Inhalt */}
      <StandardBtn onClick={onButtonClick}>{buttonText}</StandardBtn> {/* Schaltfläche mit Props */}
    </div>
  );
}

export default Content;
