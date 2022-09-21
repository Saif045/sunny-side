import React from 'react'
import {pineapples} from '../../assets/images/index'


const About = () => {
  return (
    <div className=''>

     <img className='w-full  object-cover bg-no-repeat' src={pineapples}/>
    
    
     <div className='grid sm:grid-cols-2'>

    <div className='flex justify-center items-center text-center'>
       
       <div className=' my-14 sm:m-0 w-5/6 xs:w-4/6 sm:w-5/6 md:w-4/6 lg:w-3/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nesciunt repellendus numquam ullam recusandae officiis at, omnis nihil cum, asperiores aut eos doloremque? Culpa eum laborum error voluptate id blanditiis!</div> 
      </div>
    
       <img className='w-full  object-cover bg-no-repeat' src="https://pixabay.com/get/gf0879d412ed7459fd94023030caa8b7cea097b14284b34926cb70d299268f528685c536379e8722fe3a61ae5b8123a085bc4e26a1bb4227e7eefeb50a09e0bec_1280.jpg"/>
       
     </div>
      
    </div>
  )
}

export default About