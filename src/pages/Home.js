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
import Explore from '../components/Explore'
import pics1 from "../images/features.png"
import pics2 from "../images/template.png"
import pics3 from "../images/productivity.png"
import pics4 from "../images/extension.png"
import pics5 from "../images/inspiration.png"
import SlickCarousel from '../components/SlickCarousel'
import "../style/style.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll < 700) {
      setScrollY(currentScroll);
    }
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
    <Navbar/>
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

<div className='mt-48 mb-72'>
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
        <div className='mb-96'>
        Type just about anything into the task field and<br/>
         Todoist’s one-of-its-kind natural language<br/>
          recognition will instantly fill your to-do list.
        </div>
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
            <div className='mb-96'>
            Your tasks are automatically sorted into Today,<br/>
            Upcoming, and custom Filter views to help you<br/>
            prioritize your most important work.
            </div>
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
      <p className='text-3xl  mt-28 font-bold text-center'>Explore all Todoist has to offer</p>
      <div className='flex mt-14 justify-center gap-3 items-center mb-36'>
        <Explore src={pics1} alt="feature icon" title="Features" />
        <Explore src={pics2} alt="template icon" title="Template gallery" />
        <Explore src={pics3} alt="productivity icon" title="Productivity quiz" />
        <Explore src={pics4} alt="extension icon" title="Extension gallery" />
        <Explore src={pics5} alt="inspiration icon" title="Inspiration hub" />
      </div>

      <div className='flex justify-between mx-20 my-20'>
        <div className='mt-12'>
          <FeatureSection
          title="In it for the long haul"
          subtitle={
           <>
           A task manager you
             <br />
             can trust for life
           </>
         }
         discription={
           <>
           We’ve been building Todoist for 16 years and 361<br/>
           days. Rest assured that we’ll never sell out to the<br/>
           highest bidder.

           <p className='text-blue-600 pt-8'>Read about our long-term mission</p>
           </>
           
          }
      />
    
       </div>
          <div className='w-[550px] h-64 slide relative '>
           
        <SlickCarousel/>
        
        </div>
      </div>

      <div className='mt-28 text-center bg-[#fff5ee] mix-blend-screen pt-20 pb-28'>
        <h1 className=' font-bold text-[40px] leading-[50px] mb-8'>Gain calmness and clarity with the<br/>world’s most beloved productivity app</h1>
      
      <p className=' text-xl font-semibold text-gray-600 mb-6'>337,000+ ★★★★★ reviews on Google Play and App Store</p>
      <Button/>
      <p className='text-lg text-gray-600  cursor-pointer p-5'>Download apps</p>
      </div>
      <Footer/>
    </>
  )
}

export default Home