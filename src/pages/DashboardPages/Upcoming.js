import React, { useState, useEffect } from 'react';
import SidePanel from '../../components/SidePanel'
import { FaPlus } from 'react-icons/fa6';
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from 'react-icons/io';
import { LuDot } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Calendar from '../../components/Calendar';
import DialogBox from '../../components/DialogBox';

const Upcoming = () => {
  {/* <p>Selected date: {selectedDate.toLocaleDateString()}</p> */}

  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [currentDay, setCurrentDay] = useState("")
  const [sliceMonth, setSliceMonth] = useState("")

  useEffect(() => {
    const currentDate = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];


    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const slice = month.slice(0,3)
   const day = currentDate.getDate()

    setCurrentMonth(month);
    setCurrentYear(year);
    setCurrentDay(day)
    setSliceMonth(slice)
    
  }, []); // Runs only once on component mount

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex">
      <SidePanel />
      <div className="transition-all ease-in-out w-full">
      <div className="flex justify-end mt-3 mx-6 text-sm items-center gap-3">
  <div className='border w-[4rem] h-[1.9rem] rounded-lg border-gray-300 flex justify-around items-center'>
    <IoIosArrowBack className='text-gray-300'/>
    <div className='w-[1px]  h-full bg-gray-200'></div>
    <IoIosArrowForward className='text-gray-500'/>
  </div>
  <div className='border p-1 px-2 rounded-lg border-gray-300 flex items-center'>Today</div>
  <LuSettings2 />
  <p className=''>View</p>
</div>

        <div className=" mt-8 ml-12">
          <p className="font-bold text-2xl flex items-center gap-2 cursor-pointer " onClick={handleOpenDialog}>
            {currentMonth} {currentYear}
          <IoIosArrowDown className='text-sm text-gray-500'/></p>

          <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog}>
      <Calendar/>
      </DialogBox>

         <div className='mt-12  flex items-center text-sm font-bold'>
          <p className=''>{sliceMonth} {currentDay} </p>
          <LuDot />
          <p className=''>Today <span className='font-medium pl-1'>0</span></p>
         </div>


          <div className="flex gap-4 items-center mt-8">
            <FaPlus className="text-red-600" />
            <p className="text-gray-800 text-sm">Add task</p>
          </div>
          
   

        </div>
      </div>
    </div>
  )
}

export default Upcoming