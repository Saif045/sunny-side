import React from 'react'
import {graphic ,photography ,standout ,transform ,mstandout ,mtransform ,mphotography ,mgraphic} from '../assets/images'

const hero = () => {
  return (
    <div className='sm:grid grid-cols-2 place-content-stretch'>

     <img src={mtransform} className="sm:hidden object-cover w-full " />
      <img src={transform} className="hidden object-cover w-full sm:flex  " />

      <div className='sm:order-first flex flex-wrap justify-center items-center sm:m-0 md:m-7 m-10' >
        <div className=' font-bold text-4xl  text-center '>Transform your brand</div>
        <div className=' text-center  py-5 align-middle'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</div>
        <div>LEARN MORE</div>      
      </div>

      <img src={mstandout} alt="talents" className="sm:hidden object-cover w-full" />
      <img src={standout} alt="talents" className="hidden sm:flex object-cover w-full" />

      <div className='flex flex-wrap justify-center items-center sm:m-0 md:m-7 m-10' >
        <p className=' font-bold text-4xl text-center'>Stand out to the right audience</p>
        <p className=' text-center py-5 align-middle'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
        <div>LEARN MORE</div>      
      </div>









      <div className=' relative' >
      <img src={mgraphic} alt="talents" className="sm:hidden object-cover w-full" />
      <img src={graphic} alt="talents" className="hidden sm:flex object-cover w-full" />




       <div className='absolute bottom-8 xs:bottom-36 sm:bottom-4 md:bottom-6  flex flex-col justify-center items-center '>
        <p className='text-2xl font-bold mb-4'>Graphic Design</p>
        <p className='text-center align-middle xs:mx-12 sm:mx-2 lg:mx-32 '>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention</p>
       </div>     
      </div>


      <div className=' relative' >
      <img src={mphotography} alt="talents" className="sm:hidden object-cover w-full" />
      <img src={photography} alt="talents" className="hidden sm:flex object-cover w-full" />




       <div className='absolute bottom-8 xs:bottom-36 sm:bottom-4 md:bottom-6  flex flex-col justify-center items-center '>
        <p className='text-2xl font-bold mb-4'>Photography</p>
        <p className='text-center align-middle xs:mx-12 sm:mx-2 lg:mx-32 '>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
       </div>     
      </div>










    </div>
  )
}

export default hero