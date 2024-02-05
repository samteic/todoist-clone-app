import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import todoistLogo from '../images/blacktodoist.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#fff5ee] text-gray-800 text-lg font-semibold'>
      <div className='h-[0.1px] bg-gray-300 w-full'></div>

      <div className='flex mx-6 mt-10 justify-between'>
        <div className="">
          <div className='flex gap-3'>
            <img src={todoistLogo} alt="todoist icon" className="w-8 h-8" />
            <Link to="/" className="text-black font-bold text-2xl">
              todoist
            </Link>
          </div>
          <p className='mt-8'>
            Join millions of people who organize<br />work and life with Todoist.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold mb-4'>Features</p>
          <p>How it works</p>
          <p>For teams</p>
          <p>Pricing</p>
          <p>Templates</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold mb-4'>Resources</p>
          <p>Download Apps</p>
          <p>Help Center</p>
          <p>Productivity Methods</p>
          <p>Integrations</p>
          <p>Channel Partners</p>
          <p>Developer API</p>
          <p>Status</p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold mb-4'>Company</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Inspiration Hub</p>
          <p>Press</p>
          <p>Twist</p>
        </div>

        <div className='flex flex-col gap-8 text-2xl'>
          <FaTwitter />
          <FaYoutube />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>

      <div className='mx-6 flex justify-between mt-16 pb-4 text-sm items-center font-semibold'>
        <div className='flex gap-2 text-gray-600 items-center '>
          <p>Security</p>
          <div className="w-[2px] h-4 bg-gray-400"></div>
          <p>Privacy</p>
          <div className="w-[2px] h-4 bg-gray-400"></div>
          <p className='pr-3'>Terms</p>
          <p>© Doist Inc.</p>
        </div>

        <div className='w-36 flex text-[15px] items-center justify-center h-10 bg-gray-200'>
          English
        </div>
      </div>
    </div>
  )
}

export default Footer;
