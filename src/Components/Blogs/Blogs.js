import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <p className='px-4 my-3'>14.1 How will you improve the performance of a React Application? <br />  1.We can keep the Components state local to improve the perfomance in react

                2. Monitoring react components to prevent the re renders.

                3. Using dynamic import splitting code in react.

                4. Optimize picture to load images in quick time.</p>
            <hr />
            <p className='px-4 my-3'>14.2 The Four Kinds of React State to Manage<br />
                1.Local state <br />
                2.Global state <br />
                3. Server state<br />
                4. URL state <br />Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.

                Want the #1 resource to learn React? You can become a React
            </p><hr />
            <p className='px-4 my-3'>14.3 How does prototypical inheritance work? <br /> A prototype is a working object instance. When we read a property from object and it is missing, javascript takes it automatically from the prototype. This is called prototypal inheritance. In order to get and set the Prototype of an object, we use Object, getPrototypeOf.t</p><hr />
            <p className='px-4 my-3'>14.4 Why should we not update the state directly?: <br /> We should not update the state directly. Because if we try to set the state directy as a example(products=[]) , then it wont re render the component. We need to use setState (setProducts) because it schedules an update to a component's state object. If the state changes the component then responds by re rendering.
            </p><hr />

            <p className='px-4 my-3'> 14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?<br />

            </p><hr />

            <p className='px-4 my-3'>14.6 What is a unit test? <br /> Definition: We should run unit test because it allows us to think actually what has to be done in the application. if we dont write the test maybe the application would not work appropriately and will make bad user experience.. <br />Why should write unit tests? : <br /> Unit tests are the tests which are done by the developers before deploying any application. it is done by the developers because before deploying the application developers want to check that the application is working as there expectation or not..
            </p> <hr />

        </div>
    );
};

export default Blogs;