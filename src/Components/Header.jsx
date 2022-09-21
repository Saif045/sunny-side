import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';


const Header = () => {

  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };


  return (
    <div className='relative  z-50' >
         <div className=' sm:hidden absolute top-0 w-full flex justify-between '  >
          <Link to='/'> <div  className=' text-white m-4 font-extrabold text-2xl'>SunnySide</div> </Link>
         
          <div className={ togglerNav ? 'flex flex-col gap-4 sm:flex bg-white w-32 h-36  mt-10 text-center z-50' : 'hidden sm:flex'}>
            <NavLink className=' mt-4 ' onClick={clickHandler} to='/'>Home</NavLink>
             <NavLink className=' ' onClick={clickHandler} to='/about'>About</NavLink>
             <NavLink className='' onClick={clickHandler} to='/contact'>CONTACT</NavLink>
           </div>
             <button className=' inline sm:hidden self-start nav-link' onClick={clickHandler}> 
            {togglerNav ? <AiOutlineClose className='mr-4 mt-5 text-white' size={30} /> : <FaBars className='mr-4 mt-5 text-white' size={30}/>}
            </button> 
      </div>  

      <div className='hidden sm:flex absolute top-0 w-full  justify-between '  >
          <Link to='/'> <div  className=' text-white m-5 font-extrabold text-3xl'>SunnySide</div> </Link>
         
          <div className={ ' mt-8   '}>
            <NavLink className='   p-2 m-2 text-white '  to='/'>Home</NavLink>
             <NavLink className='p-2 m-2 text-white '  to='/about'>About</NavLink>
             <NavLink className='py-2 m-2  mr-4 px-4 font-semibold bg-white sm:rounded-3xl '  to='/contact'>CONTACT</NavLink>
           </div>
     
      </div>  

    </div>
  )
}

export default Header 
