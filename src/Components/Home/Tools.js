import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Tools = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='my-3'>Tools</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  '>

                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    >
                    </SingleProduct>)
                }

            </div>
        </div>
    );
};

export default Tools;