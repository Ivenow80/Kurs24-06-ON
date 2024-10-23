import React from 'react';
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import './HomepageButton.css';
import './UeberMichButton.css';
import './WarenkorbButton.css';


function App() {
  // Handler für die Schaltfläche
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="main-container">
      <header>
        <Navbar />
      </header>
      <main>
        {/* Content-Komponente mit benutzerdefinierten Button-Props */}
        <Content buttonText="IT" onButtonClick={handleButtonClick}>
          <div>Hello from Earth</div>
        </Content>
        {/* Hier kann eine andere benutzerdefinierte Komponente eingefügt werden */}
        <NewComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
