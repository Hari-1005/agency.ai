import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full text-center overflow-hidden text-gray-700 dark:text-white'>

        <div className='inline-flex items-center gap-2 border border-gray-300 rounded-full p-1.5 pr-4'>
            <img className='w-20' src={assets.group_profile} alt="group-icon" />
            <p className='text-xs font-medium dark:text-white' >Trusted by 10k+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px] max-w-5xl font-medium'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

        <div className='mt-4 relative'>
            <img src={assets.hero_img} alt="" className='w-full max-w-5xl'/>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 md:-top-70 md:-right-70 lg:-top-100 -z-1 dark:hidden'/>
        </div>
    </div>
  )
}

export default Hero