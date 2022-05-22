
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css'

import Social from './Social';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const [signInWithGoogle, guser,gloading, gerror] = useSignInWithGoogle(auth)
    // 
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
  

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    if (loading) {
        return <Loading/>
    }
    if (user||guser) {
        navigate(from, { replace: true });
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        await signInWithEmailAndPassword(email, password)
        // const { data } = await axios.post('https://murmuring-shelf-21130.herokuapp.com/login', { email })
        // localStorage.setItem('accessToken', data.accessToken)
        // navigate(from, { replace: true });


    }
    let errorElement
    if (error || gerror || giterror) {
        errorElement = <p className='text-red-700'>{error?.message}{gerror.message}{giterror?.message} </p>
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }
    }


    return (
        <div>

            <div className='form-container md:w-1/2 mx-auto py-10 my-10 sm:w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 mx-auto '>
                    <h1 className='text-3xl pb-3'>Please Login</h1>
                    <input className='p-2 mb-2 rounded' ref={emailRef} type="email" name="email" id="" placeholder='Email' required />

                    <input className='p-2 mb-2 rounded' ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />

                    <input className='text-black bg-gray-400 font-bold py-2 submit rounded-xl hover:text-blue-700 ' type="submit" value="Login" />
                </form>
                {
                    loading || gloading || gitloading ? <Loading /> : ''
                }
                {
                    errorElement
                }
                <p className='text-black mt-3 '>New to this site ?<Link className='text-blue-700 ' to='/signup'> Sign Up</Link> </p>
                <p>Forget Password ?  <button className='text-blue-700' onClick={resetPassword}>Reset Password</button> </p>
                <div className='or flex justify-center items-center gap-2'>
                    <hr className='w-1/5' /> OR <hr className='w-1/5' />
                </div>

                <div className='flex flex-col items-center justify-center '>
                    {/* <div onClick={() => signInWithGoogle()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' />
                        <button className='font-bold'> Google Sign In</button>
                    </div> */}
                    {/* <div className='w-1/2 flex justify-center items-center text-black  bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8 ' src={facebook} alt="" />
                        <button className='font-bold'> Facebook Sign In</button>
                    </div> */}
                    {/* <div onClick={() => signInWithGithub()} className='w-1/2 flex justify-center items-center text-black gap-2 bg-gray-400  py-2 mt-2  rounded-xl hover:text-blue-700  '>
                        <img className='h-8' alt="" />
                        <button className='font-bold'> Github Sign In</button>
                    </div> */}

                </div>
                <Social />

            </div>
        </div>
    );
};

export default Login;