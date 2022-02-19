import React,{useState} from 'react';
import {sliderImg} from '../sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderImg.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(sliderImg) || sliderImg.length <= 0) {
        return null;
    }
  return (
    <div className='carousel-wrapper'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {sliderImg.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='carousel__product'>
                <img src={slide.image} alt='tea' className='image' />
                <div className='carousel__product-details'>
                    <h1>{slide.name}</h1>
                    <p>{slide.desc}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Carousel