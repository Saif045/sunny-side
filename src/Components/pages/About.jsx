import React from 'react'
import {pineapples , roses} from '../../assets/images/index'


const About = () => {
  return (
    <div className=''>

     <img className='w-full max-h-[730px]  object-center bg-no-repeat' src={pineapples}/>
    
    
     <div className='grid sm:grid-cols-2'>

    <div className='flex justify-center items-center text-center'>
       
       <div className=' my-14 sm:m-0 w-5/6 xs:w-4/6 sm:w-5/6 md:w-4/6 lg:w-3/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nesciunt repellendus numquam ullam recusandae officiis at, omnis nihil cum, asperiores aut eos doloremque? Culpa eum laborum error voluptate id blanditiis!</div> 
      </div>
    
       <img className='w-full  object-cover bg-no-repeat' src={roses}/>
       
     </div>
      
    </div>
  )
}

export default About