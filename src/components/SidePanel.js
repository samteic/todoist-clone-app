import React, { useState } from 'react';
import { GoBell } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { BsLayoutSidebar } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { LiaInboxSolid } from 'react-icons/lia';
import { CiCalendarDate } from 'react-icons/ci';
import { LuCalendarDays } from 'react-icons/lu';
import { PiSquaresFourThin } from 'react-icons/pi';
import { FaPlus } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import '../style/style.css';


const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? 'w-fit h-screen bg-[#f8f4f4] pt-4 relative left-0 transition-all ease-in-out' : 'transition-all ease-in relative left-[-499px] w-0'}>
        <div className='flex items-center gap-2 px-4'>
          <div className='bg-gray-500 text-white w-7 h-7 text-center rounded-full cursor-pointer'>u</div>
          <p className='text-sm flex gap-1 items-end mr-4 font-semibold cursor-pointer'>useremailadress<IoIosArrowDown className='text-sm font-light' /></p>
          <div className='flex gap-6 '>
            <GoBell className='text-gray-500 text-lg cursor-pointer' />
            <BsLayoutSidebar className='text-gray-500 text-lg cursor-pointer' onClick={toggleSideBar} />
          </div>
        </div>

        <div className='flex gap-2 items-center mt-4 mx-3 px-1 py-[6px] hover:bg-[#feeded] hover:rounded-sm '>
          <div className='w-6 h-6 bg-red-600 flex items-center justify-center pb-1 text-white rounded-full text-2xl'>+</div>
          <p className='text-red-700 text-[14px] font-semibold'>Add task</p>
        </div>

        <div className='flex gap-2 items-center mt-2 mx-3 py-[6px] px-1 hover:bg-[#feeded] hover:rounded-sm '>
          <CiSearch className='w-6 h-6 text-gray-500' />
          <p className='text-[14px] text-gray-900'>Search</p>
        </div>

        <NavLink to='/inbox' activeClassName='active' className='hover:bg-[#feeded] hover:rounded-sm mx-3 px-1 flex gap-2 items-center py-[6px] cursor-pointer text-[14px] text-gray-900'>
          <LiaInboxSolid className='w-6 h-6 text-gray-500 icon' />Inbox</NavLink>

        <NavLink to='/today' activeClassName='active' className='hover:bg-[#feeded] hover:rounded-sm flex gap-2 items-center mx-3 px-1  py-[6px]  text-[14px] text-gray-900'>
          <CiCalendarDate className='w-6 h-6 text-gray-500 icon' />Today</NavLink>

        <div className=''>
          <NavLink to='/upcoming' activeClassName='active' className='hover:bg-[#feeded] hover:rounded-sm flex gap-2 mx-3 px-1 items-center  py-[6px] text-[14px] text-gray-900'>
            <LuCalendarDays className='w-6 h-6 text-gray-500 icon' /> Upcoming</NavLink>
        </div>

        <div className=''>
          <NavLink to='/filters' activeClassName='active' className='hover:bg-[#feeded] hover:rounded-sm flex gap-2 mx-3 px-1 items-center py-[6px]  text-[14px] text-gray-900'>
            <PiSquaresFourThin className='w-6 h-6 text-gray-500 icon' />Filter & Labels</NavLink>
        </div>

        <div className='flex  justify-between items-center mx-2 px-1 mt-5 cursor-pointer hover:bg-[#feeded] hover:rounded-sm py-[8px]'>
          <NavLink to='/myprojects' activeClassName='active' className=' text-gray-800 font-semibold text-[14px]'>
            My Projects</NavLink>
          <div className='flex gap-3 text-gray-500'>
            <FaPlus />
            <IoIosArrowDown />
          </div>
        </div>

        <div className='flex mt-[17rem] fixed gap-2 items-center text-gray-800 px-4'>
          <FaPlus />
          <p className='text-sm font-semibold'>Add a team</p>
          <p className='bg-green-100 font-bold text-green-700 text-[10px] w-8 flex justify-center h-4'>NEW</p>
        </div>
      </div>

      <BsLayoutSidebar className={isOpen ? 'hidden' : 'text-gray-500 text-lg cursor-pointer mt-5 ml-4 mr-16 relative top-0'} onClick={toggleSideBar} />
    </>
  );
};

export default SidePanel;
