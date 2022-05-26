import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p>14.1 How will you improve the performance of a React Application? <br/>  Optimizing performance in a React application
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>
                <hr />
            <p>14.2 The Four Kinds of React State to Manage<br />
                1.Local state <br />
                2.Global state <br />
                3. Server state<br />
                4. URL state <br />Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.

                Want the #1 resource to learn React? You can become a React
            </p><hr/>
            <p>14.3 How does prototypical inheritance work? <br/> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p><hr/>
            <p>14.4 Why should we not update the state directly?: <br/> One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this. 
            </p><hr/>

            <p> 14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?<br/> 
            
            </p><hr/>

            <p>14.6 What is a unit test? <br/> Definition: This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use. <br/>Why should write unit tests? : <br/> Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.
            </p> <hr/>

        </div>
    );
};

export default Blogs;