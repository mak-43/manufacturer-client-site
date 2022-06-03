import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Pro = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [user]=useAuthState(auth)
    const email= user.email
    
    
  

    const { data: product, isLoading, error, refetch } = useQuery('product', () => fetch(`http://localhost:5000/profile?email=${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
        
    }
    console.log(product)

    return (
        <div>
            <div>
                <form className='flex flex-col mb-4 px-3 ' >
                        <h2>My Profile{product.lenght}</h2>
                    <input value={product[0].name} className='border p-2 mb-2 ' {...register("name", { required: true })} />

                    <input value={email} className='border p-2 mb-2 ' {...register("email", { required: true })} />

                    <input placeholder='Education' value={product[0].education} className='border p-2 mb-2 ' {...register("education", { required: true })} />
                    <input placeholder='Location' value={product[0].location} className='border p-2 mb-2 ' {...register("location", { required: true })} />
                    <input placeholder='Phone Number'value={product[0].phone} className='border p-2 mb-2 ' {...register("phone", { required: true })} />
                    <input placeholder='LinkdIn link' value={product[0].linkdin} className='border p-2 mb-2 ' {...register("linkdin")} />

                   
                </form>
            </div>
        </div>
    );
};

export default Pro;