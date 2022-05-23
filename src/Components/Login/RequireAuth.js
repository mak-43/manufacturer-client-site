import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';



const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth)
    const navigate = useNavigate()
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    
    
    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <div className='mt-44 h-80  '>
    //         <div className='flex flex-col justify-center items-center my-auto'>
    //         <h3 className='text-danger'>Your Email is not verified!!</h3>
    //         <h5 className='text-success'> Please Verify your email address</h5>
    //         <button
    //             className='btn btn-warning'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //         </div>

    //     </div>
    // }

    return children

};

export default RequireAuth;