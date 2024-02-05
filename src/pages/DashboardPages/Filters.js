import React from 'react'
import SidePanel from '../../components/SidePanel'
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import { CiDroplet } from "react-icons/ci";

const Filters = () => {
  return (
    <div className="flex">
      <SidePanel />
      <div className="transition-all ease-in-out w-full mx-32 mt-16">

        <p className="font-bold pl-6 text-2xl">Filters & Labels</p>

        <div className='flex justify-between items-center text-sm font-bold mt-6'>
          <div className='flex items-center gap-[0.7rem]'>
            <IoIosArrowDown />
            <p>Filters</p>
            <p className='text-gray-500 text-[10px] h-4 flex items-center mt-1 bg-gray-200 px-1'>USED: 2/3</p>
          </div>
          <FaPlus />
        </div>
        <hr className='ml-6 mt-3' />

        <div className='flex items-center mt-3 ml-8 gap-2'>
          <CiDroplet />
          <p className='text-sm'>Assigned to me</p>
        </div>
        <hr className='ml-6 mt-3' />

        <div className='flex items-center mt-3 ml-8 gap-2'>
          <CiDroplet />
          <p className='text-sm'>Prority 1</p>
        </div>
        <hr className='ml-6 mt-3' />

        <div className='flex justify-between items-center text-sm font-bold mt-10'>
          <div className='flex items-center gap-[0.7rem]'>
            <IoIosArrowDown />
            <p>Labels</p>
            
          </div>
          <FaPlus />
        </div>
        <hr className='ml-6 mt-3' />

        <p className='text-sm text-gray-500 ml-6 mt-4'>Your list of labels will show up here.</p>




      </div>
    </div>
  )
}

export default Filters