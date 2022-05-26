import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role, _id } = user
    const makeAdmin = () => {
        fetch(`https://murmuring-fortress-98073.herokuapp.com/user/admin/${email}`, {
            method: 'put',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an admin`)
                }
            })
    }
    const handleRemove = id => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://murmuring-fortress-98073.herokuapp.com/deleteuser/${id}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    toast('user deleted')
                    refetch()
                })
        }

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm ">Make Admin</button>}</td>
            <td><button class="btn btn-sm " onClick={() => handleRemove(_id)}>Remove User</button></td>
        </tr>
    );
};

export default UserRow;