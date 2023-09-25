import React, {useState,useContext} from 'react';
import myImage from '../LogoName.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import './Login.css';
import { AccountContext } from '../../context/AccountProvider';
const Login=()=>{

    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess= async(res)=>{
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
    };
    const onLoginError=(res)=>{
        console.log("Login failed")
    };
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
                    <div className='loginButtons-cont'>
                        <div className='goauth-cont'>
                        <GoogleLogin className="goauth"
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                        </div>
                        <button className='login-button'>Login</button>
                        <span><p className='sign-up'>Don't have an account yet?<button onClick={toggleForm}  className='sign-up'> Sign-up</button></p></span>
                    </div>
                                  
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
                    <div className='signupButtons-cont'>
                        <button className='Signup-button'>Sign-Up</button>
                        <span><p className='sign-up'>Aleady have an account?<button onClick={toggleForm}  className='sign-up'> Login</button></p></span>
                    </div>
                                  
                </div>
                
                </div>
            )}
        </div>
    )
}
document.body.style.background='url(./chat.jpg)';

export default Login;