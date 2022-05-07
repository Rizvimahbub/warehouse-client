import React, { useRef, useState } from 'react';
import './Login.css';
import Vector from './Image/Vector.png';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../authentification.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import Spinner from '../Spinner/Spinner';


const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, loginError,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const loginProcess = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        if (loginError || passwordResetError) {
            setError(<p className='text-danger'>{loginError?.message} {passwordResetError?.message}</p>)
            return loginProcess;
        }
        else{
            setError('')
        }
    }

    let from = location.state ?. from ?. pathname || '/' ;
    

    const passwordResetProcess = async() => {
        const email = emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email);
        alert('password sent')
    }


    if (user) {
        navigate(from, {locaton : true})
    }

    if(loading || sending){
        return <Spinner></Spinner>
    }

    const navigateToRegister = () => {
        navigate('/register')
    }


    return (
        <div className='login d-flex justify-content-center align-items-center'>

            <div className=' login-container d-flex bg-white row'>
                <div className='vector col-lg-8 col-md-12 col-sm-12'>
                    <img className='w-100' src={Vector}></img>
                </div>
                <div className='pt-5 form bg-white col-lg-4 col-md-12 col-sm-12'>
                    <h3 className='fw-bold mb-3 s-title'>Sign In</h3>
                    <form onSubmit={loginProcess}>
                        <label className='fw-bold'>Email</label><br />
                        <input className='mb-2 w-100 border border-2 p-2 ps-2 rounded-3' ref={emailRef} type='email' name='email' placeholder='you@example.com' required></input><br />
                        <label className='fw-bold'>Password</label><br />
                        <input className='mb-2 w-100 border border-2 p-2 ps-2 rounded-3' ref={passwordRef} type='password' name='password' placeholder='Password' required></input><br />
                        <div className='my-2'>
                            <input type='checkbox'></input> <span>Remember me</span>
                        </div>
                        <input className='submit-btn w-100 rounded-3 border-0 p-2 fw-bold mb-2' type='submit' value='Login'></input><br />
                        {error}
                        <span onClick={passwordResetProcess} className='span'>Forget password?</span>
                        <GoogleSignIn></GoogleSignIn>
                        <p>Don't have an account yet? <span onClick={navigateToRegister} className='span'>Sign up</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;