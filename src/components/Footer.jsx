import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* Footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div>
                <img src={assets.logo} className='w-32 sm:w-44' alt="" />
                <p>From strategy to execution, we craft digital solutions that move your business forward.</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer