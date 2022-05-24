import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const SingleProduct = ({product}) => {
    const {_id,name,img,description,minimum,available,price}=product
    const navigate=useNavigate()
    return (
        <div className='product flex flex-col justify-center items-center p-5'>
            <div className='flex justify-center  '><img className='rounded-t-xl  w-full h-full img-fluid' src={img} alt="" /></div>
            <div className='flex flex-col text-left justify-center leading-3 mb-4 botom font-semibold'>
                <p>ID: {_id}</p>
                <p>Name: {name}</p>
                <p>Description: {description}</p>
                <p>Minimum: {minimum}</p>
                <p>Available: {available}</p>
                <p>Unit Price : ${price}</p>
                <button className=' btn btn-warning ' onClick={()=>navigate(`/purchase/${_id}`)}>Place Order</button>
            </div>
        </div>
    );
};

export default SingleProduct;