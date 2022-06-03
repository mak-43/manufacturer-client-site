import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import pic from '../Assets/bg.jpg'
const Contact = () => {
    return (
        <div className='my-5'>
            <div className="py-5 "style={{
                background: `url(${pic})`,
                // backgroundImage: 'no-repeat',
                // backgrondSize:'cover'
            
               
            }}>
                <div className='text-center my-4'>
                   
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <input type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
                    <textarea type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;