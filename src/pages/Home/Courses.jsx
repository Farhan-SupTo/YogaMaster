import React from 'react';
// import data
import {courses} from '../../../data' 

// import icons 
import { BsStarFill,BsStarHalf }  from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <section className='section-sm lg:-mb-36 lg:section-lg'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-16 lg:mb-32'>
          <h2 className='h2 mb-3 lg:mb-[18px]'
          data-aos='fade-down' data-aos-delay='500'>Popular Courses</h2>
          <p className='max-w-[480px] mx-auto'
          data-aos='fade-down' data-aos-delay='300'>Practice anywhere,anytime,Explore a new way to exercise and learn more about yourself.We are providing the best.</p>
        </div>
        {/* course list */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
          {
            courses.map((item,index)=>{
              const {image,title,desc,link,delay} =item 
              return <div className='w-full bg-white hover:shadow-2xl max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[14px] mx-auto transition'
              data-aos='fade-up' data-aos-delay={delay}
              key={index}>
                {/* image */}
                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                  <img src={image} alt="" />
                </div>
                {/* text */} 
                <div>
                  <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>{title}</h4>
                  <p>{desc}</p>
                </div>
                {/* bottom */} 
                <div className=' flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                  {/* rating */}
                  <div className='flex text-orange gap-x-2'>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                  </div>
                  {/* link */} 
                  <a className='font-medium' href="#">{link}</a>
                </div>
              </div>
            })
          }
        </div>
        {/* btn */}
        <div className='flex justify-center'
        data-aos='fade-up' data-aos-delay='600'>
          <Link to='/classes'><button className='bg-orange hover:bg-orange-200'>Browse all</button></Link>
          
        </div>
      </div>
    </section>
  );
};

export default Courses;