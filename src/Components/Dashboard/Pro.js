import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Pro = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    
 
  

    const { data: products, isLoading, error, refetch } = useQuery('product', () => fetch(`https://murmuring-fortress-98073.herokuapp.com/profile`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const {name,education,linkdin,location,phone,email}=products([])
    return (
        <div>
            <div>
                <form className='flex flex-col mb-4 px-3 ' >
                        <h2>My Profile</h2>
                    <input value={name} className='border p-2 mb-2 ' {...register("name", { required: true })} />

                    <input value={email} className='border p-2 mb-2 ' {...register("email", { required: true })} />

                    <input placeholder='Education' value={education} className='border p-2 mb-2 ' {...register("education", { required: true })} />
                    <input placeholder='Location' className='border p-2 mb-2 ' {...register("location", { required: true })} />
                    <input placeholder='Phone Number' className='border p-2 mb-2 ' {...register("phone", { required: true })} />
                    <input placeholder='LinkdIn link' value={linkdin} className='border p-2 mb-2 ' {...register("linkdin")} />

                   
                </form>
            </div>
        </div>
    );
};

export default Pro;