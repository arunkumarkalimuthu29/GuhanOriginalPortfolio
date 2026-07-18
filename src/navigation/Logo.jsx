import React, { useState, useEffect } from 'react';
import './logo.css';

const Logo = ({ onClick }) => {
  const [text, setText] = useState("GUHAN T");

  useEffect(() => {
    // Loop the text every 4 seconds
    const interval = setInterval(() => {
      setText(prev => prev === "GUHAN T" ? "HOME" : "GUHAN T");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Helper to generate random scatter positions
  const getScatterStyle = () => {
    const x = Math.floor(Math.random() * 200 - 100) + 'px'; // -100px to 100px
    const y = Math.floor(Math.random() * 100 - 50) + 'px';  // -50px to 50px
    return { '--x': x, '--y': y };
  };

  return (
    <div className="system-logo" onClick={onClick}>
      {/* Changing the key forces the animation to restart */}
      <div className="logo-wrapper" key={text}>
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="logo-char" 
            style={{ 
              ...getScatterStyle(),
              animationDelay: `${index * 0.05}s` // Slight ripple effect
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logo;