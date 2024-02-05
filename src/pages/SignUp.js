import React, { useState } from 'react';
import TodoistLogo from '../reusables/TodoistLogo';
import { useNavigate } from 'react-router-dom';
import "../style/style.css"
import { HiEye, HiEyeOff } from 'react-icons/hi';
import img1 from "../images/signupimg1.jpg"
import img2 from "../images/signupimg2.jpg"
import img3 from "../images/signupimg3.jpg"
import img4 from "../images/signupimg4.jpg"
import AuthSIgnin from '../reusables/AuthSIgnin';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility
    const navigate  = useNavigate()
    const handleClick = () => {
        navigate("/today")
    }
    return (
        <div className='mx-48 mt-6'>
            <TodoistLogo />

            <div className='grid grid-cols-2 mt-24 gap-48'>
                <div>

                    <h1 className='text-3xl font-bold'>Sign up</h1>

                    <div className='grid gap-4 mt-6 relative '>
                       

                    <AuthSIgnin/>

                        <input type='text' className='h-14 border-gray-100 rounded-lg border-2 pl-2 mt-5' />
                        <label className=' absolute left-2 top-[12.6rem] -translate-y-1/2 w-fit text-sm transition-all duration-300'>Email</label>


                        <input
                            placeholder='Enter your passowrd...'
                            type={showPassword ? 'text' : 'password'}
                            id="example-input"
                            className='h-14 pl-2 pt-5 border-gray-100 rounded-lg border-2 ' />
                        <label htmlFor="example-input" className=' absolute left-2 top-[17.1rem] -translate-y-1/2 w-fit text-sm transition-all duration-300'>Password</label>

                        <div
                            className="absolute right-3 top-[18.5rem] -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <HiEyeOff /> : <HiEye />} {/* Toggle icon */}
                        </div>
                        <button onClick={handleClick} className='flex items-center justify-center h-12 rounded-lg text-white font-bold bg-red-600 hover:bg-red-700'>
                            Sign up with Email</button>

                        <p className='text-[13px]'>By continuing with Google, Apple, or Email, you agree to Todoist’s<br />
                            <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy.</span></p>

                        <p className='text-[13px] mt-3 mb-8 text-center'>Already signed up? <span className='underline'>Go to login</span></p>
                    </div>

                </div>

                <div className='grid grid-cols-2 h-fit gap-y-8'>
                    <div className=''>
                    <img src={img1} alt="signup page img" className='bg-center object-contain w-48 h-48' />
                    <h1 className='text-center font-bold'>30 million+ <p className='font-medium text-sm'>app downloads</p></h1>
                   
                    </div>
               <div className=''>
               <img src={img2} alt="signup page img" className='bg-center object-contain w-48 h-48' />
               <h1 className='text-center font-bold'>15 years+ <p className='font-medium text-sm'>in business</p></h1>
               </div>

               <div className=''>
               <img src={img3} alt="signup page img" className='bg-center object-contain w-48 h-48' />
               <h1 className='text-center font-bold'>2 billion+ <p className='font-medium text-sm'>tasks completed</p></h1>
               </div>

            <div className=''>
            <img src={img4} alt="signup page img" className='bg-center object-contain w-48 h-48' />
            <h1 className='text-center font-bold'>1 million+ <p className='font-medium text-sm'>Pro users</p></h1>
            </div>
            
             </div>


            </div>
        </div>
    );
};

export default SignUp;
