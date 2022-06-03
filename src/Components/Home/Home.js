import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/> 
            <Tools/> 
            <Info/>
            <Summary/> 
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;