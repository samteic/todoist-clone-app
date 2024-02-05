import React from 'react'
import SidePanel from "../../components/SidePanel"
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';

const MyProjects = () => {
  return (
    <div className="flex">
      <SidePanel />
      <div className="transition-all ease-in-out w-full">
        <div className="flex justify-end mt-4 mx-4 items-center gap-2">
          <IoSettingsOutline />
          <p className='text-sm'>Settings</p>
        </div>
        <div className="mx-36 mt-8">
          <p className="font-bold text-2xl">My Projects</p>
          <p className='text-sm text-gray-500 mt-2'>Free plan</p>

          <div className="relative mt-5">
            <input
              type="text"
              placeholder="Search projects"
              className="border border-gray-300 rounded-lg w-full h-9 pl-10 text-[14px] pr-4 focus:outline-none focus:border-gray-400"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-500 text-xl" />
            </div>
          </div>

          <div className='flex justify-between items-center mt-3 '>
            <div className='flex items-center border p-1 px-2 rounded-lg gap-2 text-gray-500'>
              <p className='text-sm'>Active projects</p>
              <IoIosArrowDown />
            </div>

            <div className='flex items-center p-1 text-gray-700 font-semibold px-2 rounded-lg gap-2 bg-gray-100'>
              <FaPlus />
              <p className='text-sm'>Add projects</p>
            </div>
          </div>

          <p className='text-gray-700 font-semibold text-sm mt-5'>0 projects</p>
          <hr className='mt-2 border-gray-100'/>

        </div>
      </div>
    </div>
  )
}

export default MyProjects