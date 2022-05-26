import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageProducts = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [products,setProduct]=useState([])
    const imgStorageKey = '6d58d8deea3773d04ec3b9955d466d7f'

    const onSubmit = data => {
        console.log(data)
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

        fetch(url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        minimum: data.minimum,
                        available: data.available,
                        price: data.price
                    }
                    //send to DB 

                    fetch('http://localhost:5000/productsadd', {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added')
                                reset()
                            }
                            else {
                                toast.error('Failed to add the Products')
                            }
                        })
                }
                console.log('ImgBB', result)
            })



        console.log(data)

    }
    useEffect(() => {
        
            const url = `http://localhost:5000/allproducts`
            
            fetch(url,{
                method:'get',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setProduct(data);
            });

    
    }, [products])
    const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `http://localhost:5000/deleteproduct/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    toast('Product deleted')
                })
        }

    }


    return (
        <div >
            <div className='w-50 mx-auto my-4'>
                <h2>ADD PRODUCT</h2>

                <form className='flex flex-col mb-4 px-3 ' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Photo' type='file' className='border p-2 mb-2 ' {...register("img", { required: true })} />

                    <input placeholder='Product Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />

                    <input placeholder='Description' className='border p-2 mb-2 ' {...register("description", { required: true })} />

                    <input placeholder='Minimum Quantity' className='border p-2 mb-2 ' {...register("minimum", { required: true })} />

                    <input placeholder='Available Quantity' className='border p-2 mb-2 ' {...register("available", { required: true })} />

                    <input placeholder='Unit Price' className='border p-2 mb-2 ' {...register("price")} />

                    <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Post' />
                </form>
            </div>
            <div>
                <div class="overflow-x-auto my-5">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Minimum</th>
                                <th>Available</th>
                                <th>Unit Price</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                           {
                               products.map((p,index)=> <tr>
                               <th>{index+1}</th>
                               <td>{p.name}</td>
                               <td><img className='w-8' src={p.img} /></td>
                               <td>{p.minimum}</td>
                               <td>{p.available}</td>
                               <td>${p.price}</td>
                               <td><button onClick={()=>handleDelete(p._id)} className='text-red-600 font-bold'>X</button></td>
                           </tr>)
                           }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};


export default ManageProducts;