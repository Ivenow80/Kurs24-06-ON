import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importiere die App-Komponente
import reportWebVitals from './reportWebVitals';
import './index.css'; // Optional: Globale Stile

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
