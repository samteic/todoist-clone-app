import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineFacebook } from 'react-icons/md';
import { FaApple } from 'react-icons/fa6';

const AuthSIgnin = () => {
  return (
    <>
         <button className='hover:bg-gray-100 border-gray-100 gap-2 text-lg font-bold rounded-lg h-10 border-2 flex items-center justify-center'>
                            <FcGoogle />Continue with Google</button>
                        <button className='hover:bg-gray-100 border-gray-100 gap-2 text-lg font-bold rounded-lg h-10 border-2 flex items-center justify-center'>
                            <MdOutlineFacebook />Continue with Facebook</button>
                        <button className='hover:bg-gray-100 border-gray-100 gap-2 text-lg font-bold rounded-lg h-10 border-2 flex items-center justify-center'>
                            <FaApple />Continue with Apple</button>
    </>
  )
}

export default AuthSIgnin