import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './TypedText.css'; // Import your CSS file

const TypedText = () => {
  useEffect(() => {
    const options = {
      strings: ['Connect With People', 'Real-Time Communication', 'ChatSphere'],
      typeSpeed: 40,
    };

    const typed = new Typed('#element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typed-container">
      <span id="element"></span>
    </div>
  );
};

export default TypedText;
