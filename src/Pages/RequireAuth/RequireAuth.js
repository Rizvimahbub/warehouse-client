import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../authentification.init';
import Spinners from '../Shared/Spinner/Spinner';

const RequireAuth = ({ children }) => {
    let [user, loading] = useAuthState(auth);
    let location = useLocation();


    if(loading){
        return <Spinners></Spinners>
    }

    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    

    return children;
};

export default RequireAuth;