import React, { useState } from 'react';

// import modal video
import ModalVideo from 'react-modal-video'
import '../../video.scss'

// import icons 
import { BsPlayCircleFill } from 'react-icons/bs';

const Features = () => {
  const [isOpen,setIsOpen] =useState(false)
  return (
    <section className='bg-section lg:-mb-32 min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]'>
       <div>
      {/* video bg */}
     
<div className='bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full justify-center flex items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20'
data-aos='fade-up' data-aos-offset='500' data-aos-duration='1500'>
  {/* video play btn */}
<div onClick={()=>setIsOpen(!isOpen)} className='text-6xl lg:text-[120px] cursor-pointer hover:scale-110 text-orange transition'>
  <BsPlayCircleFill></BsPlayCircleFill>
</div>
</div>
{/* text */}
<div className='flex flex-col lg:flex-row lg:gap-x-8'>
  <div className='flex-1' data-aos='fade-right'>
    {/* line */}
    <div className='w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full'>

    </div>
    <h2 className='h2 mb-3 lg:mb-0'>The Better Way to  <br />Start Yoga</h2>
    
  </div>
  <div className='flex-1' data-aos='fade-left'>
      <p className='max-w-[360px] mb-[18px] lg:mb-[38px]'>Practice anywhere,anytime,Explore a new way to exercise and learn more about yourself.We are providing the best.</p>
      <button className='bg-orange hover:bg-orange-200'>Get started</button>
    </div>
</div>
      </div>
      {/* modal Video */}
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId='klmBssEYkdU'
      onClose={()=>setIsOpen(false)}></ModalVideo>
    </section>
  );
};

export default Features;