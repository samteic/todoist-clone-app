import React from 'react';
import SidePanel from '../../components/SidePanel';
import { FaPlus } from 'react-icons/fa6';
import { LuSettings2 } from "react-icons/lu";
import img from '../../images/todayimg.jpg';
import { CiCircleQuestion } from 'react-icons/ci';

const Today = () => {
  return (
    <div className="flex">
      <SidePanel />
      <div className="transition-all ease-in-out w-full">
        <div className="flex justify-end mt-4 mx-4">
          <LuSettings2 className="" />
        </div>
        <div className="ml-36 mt-8">
          <p className="font-bold text-2xl">Today</p>
          <div className="flex gap-4 items-center mt-5">
            <FaPlus className="text-red-600" />
            <p className="text-gray-800 text-sm">Add task</p>
          </div>
          <div className="mr-16">
            <div className="flex justify-center">
              <img src={img} alt="today-img" className="w-64 h-64 bg-center object-cover" />
            </div>
            <p className="text-center py-4 text-gray-800 font-semibold">What do you need to get done today?</p>
            <p className="text-center text-sm text-gray-700">By default, tasks added here will be due<br />today. Click + to add a task.</p>
            <p className="flex gap-2 justify-center mt-28 underline text-red-600 text-sm items-center">
              <CiCircleQuestion className="text-2xl" />How to plan your day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
