import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';



const Social = () => {
    const [signInWithGoogle,guser,gloading,gerror]=useSignInWithGoogle(auth)
    const [signInWithGithub, gituser,gitloading, giterror] = useSignInWithGithub(auth);
   
    const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || "/";

   let errorElement;
 
   if (gloading || gitloading) {
     return <Loading></Loading>;
   }
 
   if (gerror || giterror) {
     errorElement = (
       <p className="text-danger">
         Error: {gerror?.message} {giterror?.message}
       </p>
     );
   }
   if (guser) {
    navigate(from, { replace: true });
  }

    return (
        <div>
                <div className='flex flex-col items-center justify-center '>
                    <div onClick={() => signInWithGoogle()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' />
                        <button className='font-bold'> Google Sign In</button>
                    </div>
                    {/* <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div> */}
                    {/* <div onClick={() => signInWithGithub()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div> */}

                </div>
        </div>
    );
};

export default Social;