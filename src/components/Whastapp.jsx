import React from 'react';
import '../style.css'; // Import the CSS file for styling

function Whatsapp() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/916380291838"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        alt="Chat on WhatsApp"
        src="./what.png"
        className="whatsapp-icon"
      />
    </a>
  );
}

export default Whatsapp;
