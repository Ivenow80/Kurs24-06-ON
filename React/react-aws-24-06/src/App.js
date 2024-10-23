import React from 'react';

// Avatar-Komponente
function Avatar() {
  return (
    <img 
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"  // Bild-URL korrekt eingebunden
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

// Navbar-Komponente
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Meine Website</h1>
      <Avatar /> {/* Avatar-Komponente wird hier verwendet */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Über uns</a></li>
        <li><a href="#services">Dienstleistungen</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
