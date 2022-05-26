import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageProducts = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const imgStorageKey='6d58d8deea3773d04ec3b9955d466d7f'

    const onSubmit = data => {
        console.log(data)
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url=`https://api.imgbb.com/1/upload?key=${imgStorageKey}`

        fetch(url,{
            method:'post',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img=result.data.url
                const product={
                    name:data.name,
                    img:img,
                    description:data.description,
                    minimum:data.minimum,
                    available:data.available,
                    price:data.price
                }
                //send to DB 

                fetch('http://localhost:5000/productsadd',{
                    method:'post',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(product)

                })
                .then(res=>res.json())
                .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('product added')
                        reset()
                    }
                    else{
                        toast.error('Failed to add the Products')
                    }
                })
            }
            console.log('ImgBB',result)
        })



        console.log(data)
      
        // fetch(`http://localhost:5000/productsadd`, {
        //     method: 'post',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('success', data)
        //         toast('Product Added')

        //     })


    }


    return (
        <div className='w-50 mx-auto my-4'>
            <h2>ADD PRODUCT</h2>

            <form className='flex flex-col mb-4 px-3 ' onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder='Photo' type='file' className='border p-2 mb-2 ' {...register("img", { required: true })} />

                <input placeholder='Product Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />

                <input placeholder='Description'  className='border p-2 mb-2 ' {...register("description", { required: true })} />

                <input placeholder='Minimum Quantity'  className='border p-2 mb-2 ' {...register("minimum", { required: true })} />

                <input placeholder='Available Quantity'  className='border p-2 mb-2 ' {...register("available", { required: true })} />

                <input placeholder='Unit Price'  className='border p-2 mb-2 ' {...register("price")} />

                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='Post' />
            </form>
        </div>
    );
};


export default ManageProducts;