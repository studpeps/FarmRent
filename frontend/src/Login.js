import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        console.log("Sign in");
    }

    const register = e => {
        e.preventDefault();
        console.log("Register");
    }

    return (
        <div className='login'>
            <Link to='/'>
                <h1 className='heading'>Farm Rent</h1>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Phone Number</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Send OTP</button>
                </form>

                <p>
                    By signing-in you agree to the FarmRent Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Farm Account</button>
            </div>
        </div>
    )
}

export default Login
