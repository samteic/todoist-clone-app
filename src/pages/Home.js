import React from 'react'
import Button from '../reusables/Button'
import img from "../images/videoframe_11544.png"
import img3 from "../images/todoistimg.png"
import img2 from "../images/sub-todoistimg.avif"
import logo1 from "../images/Microsoft.png"
import logo2 from "../images/Disney.png"
import logo3 from "../images/Amazon.png"
import logo4 from "../images/Neftlix.png"
import logo5 from "../images/Adobe.png"
import logo6 from "../images/Salesforce.png"
import { useState, useEffect } from 'react'
import img4 from "../images/images.jpg"
import FeatureSection from '../components/FeatureSection'
import VerticalComponent from '../components/VerticalComponent'

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const translateY = Math.min(-scrollY, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='text-center'>
        <h1 className=' mt-36 text-7xl font-bold text-gray-800'>Organize your work<br />and life, finally.</h1>
        <p className='mt-8 mb-8 text-xl font-semibold text-gray-600'>
          Become focused, organized, and calm with Todoist. The world's #1<br />task manager an to-do app.</p>
        <Button />

        <div className='overflow-hidden  border-b' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', height: '100vh' }}>

          <div className=' mx-20 mt-[232px] relative top-[460px] transition-transform duration-200 ease-in' style={{ backgroundImage: `url(${img2})`, transform: `translateY(${translateY}px)`, backgroundSize: 'cover', height: '100vh' }}>
            <div className='flex justify-end'>
              <img src={img3} alt='inside-bg' className='relative   right-32 bg-cover mt-[134px]' />
            </div>
          </div>

        </div>
        <p className='mt-16 mb-12 text-lg font-[600]'>30 million+ people and teams trust their sanity and productivity to Todoist</p>
        <div className='flex justify-center gap-12 mb-12'>

          {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className='w-42 h-14' />
          ))}
        </div>
      </div>
      <div className='flex justify-between mx-20 my-20'>

<div className=''>
       <FeatureSection
       title="Clear your mind"
       subtitle={
        <>
          The fastest way to get
          <br />
          tasks out of your head
        </>
      }
       discription={
        <>
        Type just about anything into the task field and<br/>
         Todoist’s one-of-its-kind natural language<br/>
          recognition will instantly fill your to-do list.
        </>
       }
       />
       <FeatureSection
           title="Focus on what’s important"
           subtitle={
            <>
             Reach that mental clarity
              <br />
              you’ve been longing for.
            </>
          }
          discription={
            <>
            Your tasks are automatically sorted into Today,<br/>
            Upcoming, and custom Filter views to help you<br/>
            prioritize your most important work.
            </>
           }
       />
       <FeatureSection
           title="Organize your teamwork, too"
           subtitle={
            <>
            Where all your tasks
              <br />
              can finally coexist.
            </>
          }
          discription={
            <>
            Give your team a shared space to collaborate and<br/>
            stay on top of it all – alongside but separate from<br/>
            your personal tasks and projects.
            </>
           }
       />
       </div>
        <img src={img4} alt='scroll-image' className='w-[500px] h-[700px] object-contain bg-center sticky top-0 '/>
      </div>
    
    <h1 className='text-center font-bold text-[40px] leading-[50px] mb-8'>
      “Todoist makes it easy to go as<br/> simple or as complex as you want”</h1>
      <p className='text-2xl mb-20 font-bold text-center'>– The Verge</p>

      <VerticalComponent/>
    </>
  )
}

export default Home