import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='w-[100%]'>
    <h2> Single Item</h2>
    <Slider {...settings}>
      <div className='w-full h-[200px] bg-red-400'>
        <h3>1</h3>
      </div>
      <div className='w-full h-[200px] bg-red-400'>
        <h3>1</h3>
      </div>
      <div className='w-full h-[200px] bg-red-400'>
        <h3>1</h3>
      </div>
      <div className='w-full h-[200px] bg-red-400'>
        <h3>1</h3>
      </div>
    </Slider>
  </div>
  )
}

export default HeroSlider