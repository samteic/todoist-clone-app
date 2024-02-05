import React from 'react'

const Explore = ({src, alt, title}) => {
  return (
    <div className=' p-10  border-2 shadow-sm rounded-lg hover:cursor-pointer '>
     <img src={src} alt={alt} className='w-32 h-32'/>
     <p className='pt-2 text-lg font-[500]'>{title}</p>
    </div>
  )
}

export default Explore