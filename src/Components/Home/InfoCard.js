import React from 'react';

const InfoCard = ({img,cartTitle,bgClass,des}) => {
    return (
        <div class={`card  bg-base-100 shadow-xl ${bgClass}`}>
        <figure className='p-5'><img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
            <h2 class="card-title">{cartTitle} </h2>
            <p>{des}</p>
            
        </div>
    </div>
    );
};

export default InfoCard;