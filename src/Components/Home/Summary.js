import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='my-4'> <h2>Millions Business Trust Us </h2>
                <h4>Try to Understand Users Expectation</h4>
                <div className='flex justify-center items-center mx-auto gap-2 w-1/2 '>
                    <hr className='text-accent  w-1/2 ' /> <hr className='text-primary  w-1/3 ' /> <hr className='text-secondary  w-1/4' />
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-3'>
                <div>
                    <i class="fa-solid fa-flag"></i>
                    {/* <span class="countdown font-mono text-6xl">
                        <span style="--value:72;"></span>   
                    </span> */}
                    <p>Countries</p>
                </div>
                <div>
                <i class="fa-solid fa-clipboard-list"></i>
                    {/* <span class="countdown font-mono text-6xl">
                        <span style="--value:72;"></span>   
                    </span> */}
                    <p>Completed Projects</p>
                </div>
                <div>
                    <i class="fa-solid fa-people-group"></i>
                    {/* <span class="countdown font-mono text-6xl">
                        <span style="--value:72;"></span>   
                    </span> */}
                    <p>Happy Clients</p>
                </div>
                <div>
                    <i class="fa-solid fa-thumbs-up"></i>
                    {/* <span class="countdown font-mono text-6xl">
                        <span style="--value:72;"></span>   
                    </span> */}
                    <p>Feedbacks</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-2'>
                <div> <h4>Have any question about us or get a products request?</h4>
                    <p>Don't hesitate to contact us </p>
                </div>
                <div className='flex gap-3 justify-center' > 
                    <button className='btn btn-active btn-accent text-white'>Request For Quote</button> 
                    <button className='btn btn-active btn-primary'>Contact Us</button>
                </div>
            </div>


        </div>
    );
};

export default Summary;