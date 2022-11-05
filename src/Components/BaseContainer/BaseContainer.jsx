import React from 'react'

const BaseContainer = ({direction,title,subtitle,text,banner,position}) => {
  const styles = {
    containerBg : `${position === 'primary' ? 'bg-white' : position === 'secondary' ? 'bg-black' : ""}`,
    subtitleClr : `${position === 'primary' ? 'text-black' : position === 'secondary' ? 'text-white' : ""}`
  }
  return (
    <div className={`lg:flex  ${direction} ${styles.containerBg} lg:justify-around lg:items-center p-10`}>
      <img src={banner} className='lg:w-96 shadow-2xl'/>
      <div className='lg:w-[30%]'>
        <p className='text-gray-400 py-3'>{title}</p>
        <p className={`text-5xl ${styles.subtitleClr} py-1`}>{subtitle}</p>
        <p className='text-gray-400 text-xl py-5' >{text}</p>
        <button className='bg-[#2CBBDB] text-white px-7 py-4 rounded-[40px]'>Learn More</button>
      </div>
    </div>
  )
}

export default BaseContainer