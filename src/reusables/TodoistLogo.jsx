import React from 'react'
import todoistLogo from '../images/todoist.png';
import { Link } from 'react-router-dom';

const TodoistLogo = () => {
  return (
    <div className='flex gap-3'>
        <img src={todoistLogo} alt="todoist icon" className="w-8 h-8" />
          <Link to="/" className="text-red-600 font-bold text-2xl">
            todoist
          </Link>
    </div>
  )
}

export default TodoistLogo