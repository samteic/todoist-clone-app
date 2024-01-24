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

const Home = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className=' mt-36 text-7xl font-bold text-gray-800'>Organize your work<br />and life, finally.</h1>
        <p className='mt-8 mb-8 text-xl font-semibold text-gray-600'>
          Become focused, organized, and calm with Todoist. The world's #1<br />task manager an to-do app.</p>
        <Button />
      
      <div className='bg-blue-600 overflow-hidden  border-b' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', height: '100vh' }}>

        <div className=' mx-20 mt-64' style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', height: '100vh' }}>
          <div className='flex justify-end'>
            <img src={img3} alt='inside-bg' className='relative right-32 bg-cover ' />
          </div>
        </div>

      </div>
      <p className='mt-16 mb-12 text-lg font-[600]'>30 million+ people and teams trust their sanity and productivity to Todoist</p>
      <div className='flex justify-center gap-12 mb-12'>
      <img src={logo1} alt='microsoft logo' className='w-42 h-12' />
      <img src={logo2} alt='disney logo' className='w-42 h-12'/>
      <img src={logo3} alt='amazon logo'className='w-42 h-12' />
      <img src={logo4} alt='netflix logo' className='w-42 h-12'/>
      <img src={logo5} alt='adobe logo' className='w-42 h-12'/>
      <img src={logo6} alt='salesforce logo' className='w-42 h-12'/>
      </div>
      </div>


    </>
  )
}

export default Home