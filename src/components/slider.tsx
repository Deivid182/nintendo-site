import { useState } from 'react';
import { slide1, slide2, slide3 } from '../assets'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item interval={1500} className='position-relative'>
        <div className='w-100 h-100 position-absolute top-0 left-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}/>
        <img
          src={slide1}
          className="d-block w-100"
          alt='slide-1'
        />
        <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center z-2'>
          <h3 className='text-white'>Lorem ipsum dolor sit.</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ipsa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} className='position-relative'>
        <div className='w-100 h-100 position-absolute top-0 left-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}/>
        <img
          src={slide2}
          className="d-block w-100"
          alt='slide-2'
        />
        <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center z-2'>
          <h3 className='text-white'>Lorem ipsum dolor sit.</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ipsa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} className='position-relative'>
        <div className='w-100 h-100 position-absolute top-0 left-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}/>
        <img
          src={slide3}
          className="d-block w-100"
          alt='slide-3'
        />
        <Carousel.Caption className='d-flex flex-column justify-content-center align-items-center z-2'>
          <h3 className='text-white'>Lorem ipsum dolor sit.</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ipsa.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider