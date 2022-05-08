import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../authentification.init";
import Google from './Image/Google.png';


const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state ?. from ?. pathname || '/' ;

    if (user) {
        navigate(from, {locaton : true})
    }
    
    return (
        <div>
            <div className='line-div d-flex justify-content-center align-items-center'>
                <div className='or-line'></div>
                <p>or</p>
                <div className='or-line'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='w-100 border-0 fw-bold rounded-3 mb-3 g-signIn'>
                <img style={{ width: '25px', marginRight: '10px' }} src={Google}></img> <span>Google Sign In</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;