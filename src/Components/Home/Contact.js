import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import pic from '../Assets/bg.jpg'
const Contact = () => {
    const handleForm=e=>{
        e.preventDefault() 
        const name=e.target.name.value
        console.log(name) 
        e.target.reset()

    }
    return (
        <div className='my-5'>
            <div className="py-5 " style={{
                background: `url(${pic})`,
                // backgroundImage: 'no-repeat',
                // backgrondSize:'cover'


            }}>
                <div className='text-center my-4'>

                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <div >
                    <form onSubmit={handleForm} className='flex flex-col justify-center items-center gap-3'>
                        <input type="text" name='name' placeholder="Name" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Phone" name='phone' class="input input-bordered input-primary w-full max-w-xs" />
                        <textarea type="text" placeholder="Address..." name='address' class="input input-bordered input-primary w-full max-w-xs" />
                        <PrimaryButton >Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;