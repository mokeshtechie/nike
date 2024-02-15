import React from 'react'

const button = ({ label , iconURL}) => {
  return (
   <button className=' flex justify-center items-center px-6 py-3 rounded-full text-white bg-coral-red font-montserrat text-lg leading-none gap-2'>
    {label}
   {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' />}
   </button>
  )
}

export default button