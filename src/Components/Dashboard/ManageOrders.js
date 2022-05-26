import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://murmuring-fortress-98073.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://murmuring-fortress-98073.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    toast('Item deleted')
                })
        }
    }

    return (
        <div>
            <h1>Manage All orders: {orders.length} </h1>
            {
               <table class="table ">
               <thead>
                   <tr>
                       <th scope="col">Product Name</th>


                       <th scope="col">Available Quantity</th>
                       <th scope="col">Minimum Quantity</th>
                       <th scope="col">Unit Price</th>
                       <th scope="col">Order Qunatity</th>
                    
                       <th scope="col">Delete</th>

                   </tr>
               </thead>

               {
                   orders.map(p =>

                       <tbody>
                           <tr>


                               <td >{p.name} </td>


                               <td>{p.available}</td>
                               <td>{p.minimum}</td>
                               <td>{p.price}</td>
                               <td>{p.order}</td>
                                <td><button onClick={()=>handleDelete(p._id)} className='text-red-600 font-bold'>X</button></td>

        
                           </tr>


                       </tbody>



                   )
               }

           </table>
            }
        </div>
    );
};

export default ManageOrders;