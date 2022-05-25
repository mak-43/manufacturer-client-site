import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query'

const Payment = () => {
    const { id } = useParams()

    const { data: product, isLoading, error, refetch } = useQuery('product', () => fetch(`http://localhost:5000/payment/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className=''>
            <div className='card w-1/2 mx-auto my-4'>
                <h1>Payment </h1>

                <div className='flex justify-center items-center'>
                    <img style={{ height: '300px ', width: '100%' }} src={product.img} alt="" />
                </div>
                <div>
                    <p>{product.email}</p>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.minimum}</p>
                    <p>{product.available}</p>
                    <p>{product.price}</p>
                    <p>Address: {product.address}</p>
                    <p>Phone number: {product.phone}</p>
                    <p>Order Quantity: {product.order}</p>
                </div>
            </div>
            <div class="card w-1/2 mx-auto shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;