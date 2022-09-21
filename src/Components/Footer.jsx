import React from 'react'
import {milkbottles, orange, cone, sugarcubes, mmilkbottles, morange, mcone ,msugarcubes ,facebook  ,instagram ,twitter , pinterest} from '../assets/images/index'

import { Link ,NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-4'>

       <img src={mmilkbottles} className="sm:hidden object-cover w-full " />
       <img src={milkbottles} className="hidden object-cover w-full sm:flex  " /> 

       <img src={morange} className="sm:hidden object-cover w-full " />
       <img src={orange} className="hidden object-cover w-full sm:flex  " />

       <img src={mcone} className="sm:hidden object-cover w-full " />
       <img src={cone} className="hidden object-cover w-full sm:flex  " />

       <img src={msugarcubes} className="sm:hidden object-cover w-full " />
       <img src={sugarcubes} className="hidden object-cover w-full sm:flex  " />

     </div>


      <div className='flex flex-col bg-green-200 p-10'>
      <Link className='self-center' to='/'>  <div className=' text-3xl sm:text-4xl font-extrabold text-green-700'>sunnyside</div> </Link>

        <div className='flex flex-row justify-center gap-6 xs:gap-8 sm:gap-12 my-10'>

           <NavLink  to='/'> <button>Home</button></NavLink>
           <NavLink  to='/about'> <button>About</button></NavLink>
           <NavLink  to='/contact'> <button>Contact</button></NavLink>

        </div>

        <div className='flex flex-row justify-center gap-4 xs:gap-6 my-10'>
          <img src={facebook}/>
          <img src={instagram}/>
          <img src={twitter}/>
          <img src={pinterest}/>
        </div>

      </div>





    </div>
  )
}

export default Footer