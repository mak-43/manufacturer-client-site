import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content ">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <h2 className='text-3xl text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                  {
                      !admin ?  <>
                         <li><Link to='/dashboard/order'>My Orders</Link></li>
                      <li><Link to='/dashboard/review'>Add Review</Link></li>
                      </>:<>
                      <li><Link to='/dashboard/users'>Make Admin</Link></li>
                      <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>
                      <li><Link to='/dashboard/alluser'>All users</Link></li>
                      <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                      </>
                  }
                  


                </ul>
            </div>

        </div>
    );
};

export default Dashboard;