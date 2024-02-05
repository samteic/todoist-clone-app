import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import todoistLogo from '../images/todoist.png';
import Button from '../reusables/Button';
import { useLocation } from 'react-router-dom';
import TodoistLogo from '../reusables/TodoistLogo';

const Navbar = () => {


    
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  // Render the Navbar for all other pages
  return (
    <div className={`fixed top-0 w-full bg-white z-10 ${isScrolled ? '' : ''}`}>
      <div className="flex py-4 items-center justify-between mx-6">
        <TodoistLogo/>

        <div className="flex gap-2 items-center font-[500] text-gray-800 text-lg">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/forteams">For Teams</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>

          <Divider />

          <button className="hover:bg-gray-100 p-2 rounded-lg"><NavLink to="/login">Log in</NavLink></button>
          <Button />
        </div>
      </div>
    </div>
  );
};

// Helper components for cleaner structure

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:bg-gray-100 p-2 rounded-lg">
    {children}
  </Link>
);

const Divider = () => <div className="w-0.5 h-6 bg-gray-300"></div>;

export default Navbar;
