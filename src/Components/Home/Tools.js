import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const Tools = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://murmuring-fortress-98073.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div className='my-5'>
            <h2 className='my-3'>Tools</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  '>

                {
                    products.slice(0, 6).map(product => <SingleProduct
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