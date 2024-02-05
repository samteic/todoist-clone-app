import React from 'react'
import SidePanel from '../../components/SidePanel'
import { FaPlus } from 'react-icons/fa6';
import { LuSettings2 } from "react-icons/lu";
import img from '../../images/inboximg.png';
import { CiCircleQuestion } from 'react-icons/ci';
import { FaRegMessage } from "react-icons/fa6";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Inbox = () => {
  return (
    <div className="flex">
    <SidePanel />
    <div className="transition-all ease-in-out w-full">
      <div className="flex justify-end mt-4 mx-4 items-center gap-3">
      <LuSettings2 />
        <p className='text-sm'>View</p>
        <FaRegMessage className='ml-3'/>
        <PiDotsThreeOutlineLight />
      </div>
      <div className="ml-36 mt-8">
        <p className="font-bold text-2xl">Inbox</p>
        <div className="flex gap-4 items-center mt-5">
          <FaPlus className="text-red-600" />
          <p className="text-gray-800 text-sm">Add task</p>
        </div>
        <div className="mr-16">
          <div className="flex justify-center">
            <img src={img} alt="today-img" className="w-72 h-72 bg-center object-contain" />
          </div>
          <p className="text-center py-4 text-gray-800 font-semibold">our peace of mind is priceless</p>
          <p className="text-center text-sm text-gray-700">Well done, samteicsolutions! All your<br />
          team's tasks are organized in the right<br/>place.</p>
          <p className="flex gap-2 justify-center mt-16 underline text-red-600 text-sm items-center">
            <CiCircleQuestion className="text-2xl" />How to declutter your mind with the Inbox
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Inbox