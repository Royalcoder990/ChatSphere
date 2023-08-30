import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';
import myImage from './LogoName.png';
const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Discover and communicate with people from around the world.'],
      typeSpeed: 40,
    };

    const typed = new Typed('#element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container'>
      <nav>
        <div className='left'><img className="logo" src={myImage} alt="Logo" /></div>
        <div className='right'>
          <ul >
            <li><a>Home</a></li>
            <li><a>Technologies Used</a></li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className='Main-Content'>
          <p className='heading'>ChatSphere</p>
          <div className="typed-container">
            <span id="element"></span>
          </div>
          <a className='login-link' href='#'>Start Chatting</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
