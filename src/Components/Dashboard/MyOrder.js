import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query'
import axiosPrivate from '../Api/axiosPrivate';
import { signOut } from 'firebase/auth';
import axios from 'axios'
import CancelModal from './CancelModal';
import { toast } from 'react-toastify';
const MyOrder = () => {
    const [user] = useAuthState(auth)
  
    const [orders, setOrder] = useState([])

    const location = useLocation();

    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        const email = user.email

        const url = `https://murmuring-fortress-98073.herokuapp.com/myorder?email=${email}`

        fetch(url, {
            method: 'get',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setOrder(data);
            });


    }, [])
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
    const handlePayment = id => {
        navigate(`/payment/${id}`)
    }
    return (
        <div>

            <h3 className='my-4'>My Orders : {orders.length}</h3>
            <div className='flex flex-col justify-center items-center gap-1'><img className='h-10 rounded-xl' src={user.photoURL} alt="" />
                <p>{user.displayName}</p>
            </div>
            {
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>


                            <th scope="col">Available Quantity</th>
                            <th scope="col">Minimum Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Order Qunatity</th>
                            <th scope="col">Payment</th>
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
                                    <td><button className='btn btn-accent' onClick={() => handlePayment(p._id)}>Payment</button></td>
                                    <td>

                                        <button className='text-danger font-bold' onClick={() => handleDelete(p._id)} >X</button></td>
                                </tr>


                            </tbody>



                        )
                    }

                </table>

            }

        </div>
    );
};

export default MyOrder;