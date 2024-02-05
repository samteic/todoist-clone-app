import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import AuthSIgnin from '../reusables/AuthSIgnin';
import img from "../images/loginimg.png"
import TodoistLogo from '../reusables/TodoistLogo';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true); // State to track password visibility
    return (
        <div className='mx-48 mt-6'>
            <TodoistLogo />

            <div className='grid grid-cols-2 mt-24 gap-48'>
                <div>

                    <h1 className='text-3xl font-bold'>Login</h1>

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
                        <button className='flex items-center justify-center h-12 rounded-lg text-white font-bold bg-red-600 hover:bg-red-700'>
                            Log in</button>


                        <p className='text-[13px] underline'>Forgot your password?</p>
                        <p className='text-[13px]'>By continuing with Google, Apple, or Email, you agree to Todoist’s<br />
                            <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy.</span></p>

                        <p className='text-[13px] mt-3 mb-8 text-center'>Don’t have an account? <span className='underline'>Sign up</span></p>
                    </div>

                </div>

                <div className=''>
                  <img src={img} alt='login-image' className='mt-28 w-96 h-96 bg-center object-contain' />
             </div>


            </div>
        </div>
  )
}

export default Login