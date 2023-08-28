import React from 'react';
import './LoginForm.css'; // Import your CSS file
import logo from './logo2.png'; // Import the image

const LoginForm = () => {
  return (
    <div className="container">
      <div className='logo-cont'><img className='logo' src={logo} alt="Logo"/></div>
        <div className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="User ID" />
          <input type="password" placeholder="Password"/>
          <br/>
          <button type="submit">Login</button>
          <p className="signup-link">Don't have an account? <button type="submit">Sign Up</button></p>
          
          
          
        </div>
    </div>
  );
};

export default LoginForm;
