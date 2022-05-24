import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [q, setQ] = useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
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
                toast('Quantity Updated')
           
            })

    }

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    
    return (
        <div className='w-50 mx-auto my-4'>
             <form className='flex flex-col mb-4 px-3' onSubmit={handleSubmit(onSubmit)}>
                <h2 >Purchase Tool</h2>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <div><img style={{ height: '300px ', width: '100%' }} src={product.img} alt="" /></div>
            
                <input placeholder='Name' value={product.name} className='border p-2 mb-2 ' {...register("name", { required: true })} />

                <input placeholder='Description' value={product.description} className='border p-2 mb-2 ' {...register("description", { required: true })} />

                <input placeholder='minimum' value={product.minimum} className='border p-2 mb-2 ' {...register("minimum", { required: true })} />

                <input placeholder='Available' value={product.available}className='border p-2 mb-2 ' {...register("available", { required: true })} />

                <input placeholder='Price' value={product.price} className='border p-2 mb-2 ' {...register("price", { required: true })} />

                <input placeholder='Email' type='email' className='border p-2 mb-2 ' {...register("email", { required: true })} />

                <input placeholder='Phone number' type='number'  className='border p-2 mb-2 ' {...register("phone", { required: true })} />

                <input placeholder='Order Quantity' type='number'  className='border p-2 mb-2 ' {...register("order", { required: true })} />

            
                <input className='border p-2 mb-2 btn btn-warning'type="submit" value='Place order' />
            </form>
            
        </div>
    );
};

export default Purchase;