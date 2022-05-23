import React from 'react';

const Summary = () => {
    return (
        <div>
            <div> <h2>Millions Business Trust Us </h2>
                <h4>Try to Understand Users Expectation</h4>
                <div></div></div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
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


        </div>
    );
};

export default Summary;