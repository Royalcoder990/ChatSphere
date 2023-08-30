import React, {useState} from 'react';
import myImage from '../LogoName.png';
import './Login.css';
const Login=()=>{
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };
    return(
        <div className='container'>
            {showLogin?(<div className='form-container'>
                <div className='form-item logo'><img className='logo' src={myImage}/></div>
                <div className='form-item'>
                    <input className='inputs' type='text' placeholder='Username:'></input>
                    <input className='inputs' type ='password' placeholder='Password:'></input> 
                    <button className='login-button'>Login</button>
                    <span><p className='sign-up'>Don't have an account yet?<button onClick={toggleForm}  className='sign-up'> Sign-up</button></p></span>              
                </div>
                
            </div>):(
                <div className='form-container'>
                <div className='form-item logo'><img className='logo' src={myImage}/></div>
                <div className='form-item'>
                    <input className='inputs-signup' type='text' placeholder='First Name:'></input>
                    <input className='inputs-signup' type='text' placeholder='Last Name:'></input>
                    <input className='inputs-signup' type='email' placeholder='Email:'></input>
                    <input className='inputs-signup' type='text' placeholder='Username:'></input> 
                    <input className='inputs-signup' type ='password' placeholder='Password:'></input> 
                    <button className='Signup-button'>Sign-Up</button>
                    <span><p className='sign-up'>Aleady have an account?<button onClick={toggleForm}  className='sign-up'> Login</button></p></span>              
                </div>
                
                </div>
            )}
        </div>
    )
}

export default Login;