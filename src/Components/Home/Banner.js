import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../Assets/b3.jpg'
import b2 from '../Assets/b2.jpg'
import b3 from '../Assets/b1.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel className='w-100' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img style={{height:'550px'}}
                    className="d-block w-100 "
                    src={b1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Outlook of Gadget Warehouse</h3>
                    <p>Anything relate to electronics you can store here</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{height:'550px'}}
                    className="d-block w-100"
                    src={b2}
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Eternal look </h3>
                    <p >We protect and preserve your products by our professionals</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{height:'550px'}}
                    className="d-block w-100"
                    src={b3}
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Final look </h3>
                    <p>
                      This item will be delivered soon 
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
    );
};

export default Banner;