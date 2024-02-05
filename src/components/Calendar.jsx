import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container text-[12px] p-0 w-[15rem] h-64 border-blue-600">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="w-[15rem] h-64 rounded-xl border-none"
        calendarClassName="bg-white rounded-lg shadow p-4 border-0" 
        
      />
     
    </div>
     
  );
}

export default MyCalendar;
