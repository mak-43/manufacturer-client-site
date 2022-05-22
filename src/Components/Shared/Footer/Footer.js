import React from 'react';


const Footer = () => {
    const year=new Date().getFullYear()
    return (
        <div className='py-5  bottom-0  ' style={{background:'rgb(33, 37, 41)'}}>
           
            <div  className='flex gap-4 justify-center items-center py-3 text-xl text-orange-400 '>
                
                <a className=' text-orange-400' href='https://www.facebook.com/mak00143/' target={"blank"} ><i class="fa-brands fa-facebook"></i></a>
                <a className=' text-orange-400' href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-brands fa-twitter"></i></a>
                <a className=' text-orange-400' href='https://www.facebook.com/mak00143/' target={"blank"} ><i class="fa-brands fa-instagram"></i></a>
                <a className=' text-orange-400' href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-brands fa-youtube"></i></a>
                <a className=' text-orange-400' href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-solid fa-envelope"></i></a>    
            </div>
            <div className='text-white'><small>Copyright &copy; {year}  </small></div>
        </div>
    );
};

export default Footer;