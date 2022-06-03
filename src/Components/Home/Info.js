import React from 'react';
import clock from '../Assets/icons/clock.svg'
import location from '../Assets/icons/marker.svg'
import phone from '../Assets/icons/phone.svg'
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            
        <InfoCard cartTitle='Opening Hour' des='10am - 5pm' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock} />
        <InfoCard cartTitle='Our location'des='Banani Dhaka' bgClass='bg-secondary' img={location} />
        <InfoCard cartTitle='Contact us' des='01613900027' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone} />
    </div>
    );
};

export default Info;