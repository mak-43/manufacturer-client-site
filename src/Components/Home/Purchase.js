import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/tools`
        fetch(url, {
            method: 'post',//thakle update korbe na thakle add koreb put
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Place order')

            })

    }
    const { data: product, isLoading, error, refetch } = useQuery('product', () => fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='w-50 mx-auto my-4'>
            <form className='flex flex-col mb-4 px-3 ' onSubmit={handleSubmit(onSubmit)}>
                <h2 >Purchase Tool</h2>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <div><img style={{ height: '300px ', width: '100%' }} src={product.img} alt="" /></div>

                <input placeholder='Name' value={user.email} className='border p-2 mb-2 ' {...register("email", { required: true })} />
                <div className='flex flex-col justify-start items-start '>
                    <div className='flex justify-center items-center gap-2'>
                        <label>Image url:</label>
                        <input placeholder='img' value={product.img} className='border p-2 mb-2 ' {...register("img", { required: true })} />
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <label>Product name:</label>
                        <input placeholder='Name' value={product.name} className='border p-2 mb-2 ' {...register("name", { required: true })} />
                    </div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Description:</label>
                        <input placeholder='Description' value={product.description} className='border p-2 mb-2 ' {...register("description", { required: true })} /> </div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Minimum Quantity:</label>
                        <input placeholder='minimum' value={product.minimum} className='border p-2 mb-2 ' {...register("minimum", { required: true })} /></div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Available Quantity:</label>
                        <input placeholder='Available' value={product.available} className='border p-2 mb-2 ' {...register("available", { required: true })} /></div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Price :</label>
                        <input placeholder='Price' value={product.price} className='border p-2 mb-2 ' {...register("price", { required: true })} /></div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Address :</label>
                        <input placeholder='address' type='text' className='border p-2 mb-2 ' {...register("address", { required: true })} /></div>

                    <div className='flex justify-center items-center  gap-2'>
                        <label>Phone :</label>
                        <input placeholder='Phone number' type='number' className='border p-2 mb-2 ' {...register("phone", { required: true })} /></div>

                    <div className='flex justify-center items-center gap-2 '>
                        <label>Order Quantity :</label>
                        <input placeholder='Order Quantity' type='number' className='border p-2 mb-2 ' {...register("order", { min: `${product.minmum}`, max: `${product.available}` })} /></div>

                </div>

                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Place order' />
            </form>

        </div>
    );
};

export default Purchase;