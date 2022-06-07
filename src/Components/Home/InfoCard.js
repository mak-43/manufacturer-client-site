import React, { useState } from 'react';
import Modal from '../Dashboard/Modal';

const InfoCard = ({ img, cartTitle, bgClass, des }) => {
    const [del, setDel] = useState(null)
    return (
        <div class={`card  bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='p-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cartTitle} </h2>
                <p>{des}</p>
          

                

            </div>
               {/* <label for="delete-modal" onClick={() => setDel('okk')} class="btn modal-button">open modal</label> */}

            {
                del && <Modal></Modal>
            }

        </div>
    );
};

export default InfoCard;