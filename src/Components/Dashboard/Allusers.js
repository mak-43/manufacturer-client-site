import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Allusers = () => {
    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'get',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='text-2xl'>All users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table ">
                
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                     {
                         users.map((u,index)=><tr>
                            <th>{index + 1}</th>
                            <td>{u.email}</td>
                           
                           
                        </tr>)
                     }
                       
                 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Allusers;