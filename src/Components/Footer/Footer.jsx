import React from 'react'
import {FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-[#131313] flex items-center justify-around  h-[80px]'>
      <p className='text-gray-500'>© 2022 Premint, Inc Terms Privacy policy Anti-abuse policy</p>
      <p className='text-white'><FaTwitter/></p>
    </div>
  )
}

export default Footer