import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../images/worldwide-todoist.avif"
import img2 from "../images/appdownload-todoist.avif"
import img3 from "../images/stats-todoist.avif"
import img4 from "../images/prouser-todoist.avif"


const SlickCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Adjust the speed for smoother transitions
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Set autoplaySpeed to 0 to disable automatic advancing
        cssEase: 'linear', // Use linear easing for smoother transitions
        pauseOnHover: false,
      };
      
    
  return (
    <>
    <Slider {...settings}>

    <div className='text-center'>
      <img src={img1} alt='' className='w-64 h-64 object-contain bg-center'/>
      <h1 className='font-bold text-2xl'>160+ countries</h1>
      <p className='text-lg'>worldwide</p>
    </div>

    <div className='text-center'>
    <img src={img4} alt='' className='w-64 h-64 object-contain bg-center'/>
    <h1 className='font-bold text-2xl'>1 million+</h1>
      <p className='text-lg'>Pro users</p>
    </div>

    <div className='text-center'>
    <img src={img2} alt='' className='w-64 h-64 object-contain bg-center'/>
    <h1 className='font-bold text-2xl'>30+ million</h1>
      <p className='text-lg'>app downloads</p>
    </div>

    <div className='text-center'>
    <img src={img3} alt='' className='w-64 h-64 object-contain bg-center'/>
    <h1 className='font-bold text-2xl'>2 billion+</h1>
      <p className='text-lg'>task completed</p>
    </div>

 

    
  </Slider>
  


  </>
  
  )
}

export default SlickCarousel