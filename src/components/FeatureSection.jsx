import React from 'react'

const FeatureSection = ({title, subtitle, discription}) => {
  return (
    <div className=''>
      <p className=' font-semibold text-red-600 text-lg'>{title}</p>
      <p className='font-bold text-[40px] leading-[50px] pt-8 text-gray-800'>{subtitle}</p>
      <p className='pt-8 text-xl font-semibold text-gray-600'>{discription}</p>
        </div>

  )
}

export default FeatureSection