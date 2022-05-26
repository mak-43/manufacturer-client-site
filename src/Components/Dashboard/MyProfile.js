import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [profile, setProfile] = useState([])
    const onSubmit = data => {
        console.log(data)
        const email = user.email
        const url = `https://murmuring-fortress-98073.herokuapp.com/profile/${email}`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Profile updated')
                reset()

            })


    }
    // useEffect(()=>{
    //     const email=user.email
    //     fetch(`https://murmuring-fortress-98073.herokuapp.com/tools/${email}`)
    //     .then(res => res.json())
    //     .then(data => setProfile(data))

    // },[profile])

    return (
        <div className='w-50 mx-auto my-4'>
            <div>
                <h2>My profile</h2>

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
            <div>
                <div class="card w-96 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!{profile.length}</h2>
                        <p>{profile.name}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;