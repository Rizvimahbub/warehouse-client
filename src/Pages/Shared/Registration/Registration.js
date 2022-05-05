import React, { useState } from 'react';
import Vector from './Image/Vector.png';
import Google from './Image/Google.png';
import { useNavigate } from 'react-router-dom';
import auth from '../../../authentification.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';


const Registration = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword,user,loading,signUpError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(
        auth
      );
    
    const registerProcess = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if(password !== confirmPassword){
            setError("Passwords didn't match");
            return registerProcess;
        }
        else{
            setError("");
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName : name});
        await sendEmailVerification();
    }

    if(user){
        navigate('/home');
        console.log(user)
    }


    const  navigateToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className=' login-container d-flex bg-white row'>
                <div className='vector col-lg-8 col-md-12 col-sm-12'>
                    <img className='w-100' src={Vector}></img>
                </div>
                <div className='pt-5 form bg-white col-lg-4 col-md-12 col-sm-12'>
                    <h3 className='fw-bold mb-3 s-title'>Sign In</h3>
                    <form onSubmit={registerProcess}>
                        <label className='fw-bold'>Name</label><br />
                        <input className='mb-2 w-100 border border-2 p-2 ps-2 rounded-3' type='text' name='name' placeholder='Name' required></input><br />
                        <label className='fw-bold'>Email</label><br />
                        <input className='mb-2 w-100 border border-2 p-2 ps-2 rounded-3' type='email' name='email' placeholder='you@example.com' required></input><br />
                        <label className='fw-bold'>Password</label><br />
                        <input className='mb-2 w-100 border border-2 p-2 ps-2 rounded-3' type='password' name='password' placeholder='Password' required></input><br />
                        <label className='fw-bold'>Confirm Password</label><br />
                        <input className='mb-3 w-100 border border-2 p-2 ps-2 rounded-3' type='password' name='confirmPassword' placeholder='Re-type Password' required></input><br />
                        <input className='submit-btn w-100 rounded-3  border-0 p-2 fw-bold mb-2' type='submit' value='Sign up'></input><br />
                        <p className='text-danger '>{error}</p>
                        <GoogleSignIn></GoogleSignIn>
                        <p>Already have an account? <span onClick={navigateToLogin} className='span'>Sign in</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;