import React from 'react'
import { headerimg ,mheaderimg  } from '../assets/images'
import {arrow } from '../assets/images/index'
const Front = () => {
  return (
  <div>
 <div className='relative'>
      
       <div className='absolute top-1/4 inset-x-1 text-center  font-serif font-black text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl'>WE ARE CREATIVES</div>
          <div className='absolute top-1/3 mt-6 sm:mt-8 -ml-4 left-2/4 '> <img src={arrow}/></div>
        <img className='sm:hidden object-cover w-full' src={mheaderimg} />
        <img className='hidden object-cover w-full sm:block ' src={headerimg} />
     

  </div>
  </div>
  )
}

export default Front