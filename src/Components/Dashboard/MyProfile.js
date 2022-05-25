import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/profile`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Profile updated')

            })


    }

    return (
        <div className='w-50 mx-auto my-4'>
            <h2>My profile</h2>

            <form className='flex flex-col mb-4 px-3 ' onSubmit={handleSubmit(onSubmit)}>
                
                <input value={user.displayName} className='border p-2 mb-2 ' {...register("name", { required: true })} />

                <input value={user.email}  className='border p-2 mb-2 ' {...register("email", { required: true })} />
                <input placeholder='Education'  className='border p-2 mb-2 ' {...register("education", { required: true })} />
                <input placeholder='Location'  className='border p-2 mb-2 ' {...register("location", { required: true })} />
                <input placeholder='Phone Number'  className='border p-2 mb-2 ' {...register("phone", { required: true })} />
                <input placeholder='LinkdIn link'  className='border p-2 mb-2 ' {...register("linkdin")} />

                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='save' />
            </form>
        </div>
    );
};

export default MyProfile;