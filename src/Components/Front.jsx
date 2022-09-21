import React from 'react'
import { headerimg ,mheaderimg } from '../assets/images'

const Front = () => {
  return (
  <div>
 <div className='relative'>
      
       <div className='absolute top-1/4 inset-x-1 text-center  font-serif font-black text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl'>WE ARE CREATIVES</div>
          <div className='absolute top-1/3 mt-10 inset-x-2/4 '><svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg></div>
        <img className='sm:hidden object-cover w-full' src={mheaderimg} />
        <img className='hidden object-cover w-full sm:block ' src={headerimg} />
     

  </div>
  </div>
  )
}

export default Front