import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Pro from './Pro';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    
 

    
    const onSubmit = data => {

        
        const email = user.email
        console.log(data.name)
        // const pro={
        //     name:user.displayName,
        //     email:email,
        //     education:data.education,
        //     location:data.location,
        //     phone:data.phone,
        //     linkdin:data.linkdin
        // }
        const url = `http://localhost:5000/profile/${email}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ name: data.name, email: data.email, education: data.education, location: data.location, phone: data.phone, linkdin: data.linkdin })
        })
            .then(res => res.json())
            .then(result => {
                console.log('success', result)
                toast('Profile updated')
                reset()

            })


    }
  
    return (
        <div className='w-50 mx-auto my-4'>
            <div>
                <h2>Update Profile</h2>

                <form className='flex flex-col mb-4 px-3 ' onSubmit={handleSubmit(onSubmit)}>

                    <input value={user.displayName} className='border p-2 mb-2 ' {...register("name", { required: true })} />

                    <input value={user.email} className='border p-2 mb-2 ' {...register("email", { required: true })} />
                    <input placeholder='Education' className='border p-2 mb-2 ' {...register("education", { required: true })} />
                    <input placeholder='Location' className='border p-2 mb-2 ' {...register("location", { required: true })} />
                    <input placeholder='Phone Number' className='border p-2 mb-2 ' {...register("phone", { required: true })} />
                    <input placeholder='LinkdIn link' className='border p-2 mb-2 ' {...register("linkdin")} />

                    <input className='border p-2 mb-2 btn btn-warning' type="submit" value='save' />
                </form>
            </div>
            {/* <Pro/> */}
        </div>
    );
};

export default MyProfile;