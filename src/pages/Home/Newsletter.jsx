import React from 'react';
// import icons
import { MdEmail } from 'react-icons/md'

const Newsletter = () => {
  return (
    <section className='section-sm lg:-mb-16 lg:section-lg bg-green min-h-[520px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'
        data-aos='fade-up' data-aos-offset='300' data-aos-delay='300'>
          <h4 className='text-[26px] text-white font-bold mb-[14px]'
          data-aos='fade-up' data-aos-offset='300' data-aos-delay='600'>Subscribe Our Newsletter</h4>
          <p className='text-green-200 mb-12'
          data-aos='fade-up' data-aos-offset='300' data-aos-delay='800'>Subscribe newsletter for further updates about us</p>
          {/* form */}
          <form className='max-w-[752px] mx-auto relative flex p-4 flex-col lg:flex-row gap-y-6 lg:p-0 gap-x-4 '
          data-aos='fade-up' data-aos-delay='1000'>
            <div className='w-full relative flex'>
              {/* icons */}
              <div className='absolute h-full w-12 flex justify-center items-center text-2xl text-green-300 left-2'>
                <MdEmail></MdEmail>
              </div>
              <input className='form-form-control w-full border border-green-200 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]' 
              placeholder='Enter Your Email Address'
              type="email" />
            </div>
            {/* button */}
            <button className='btn-orange w-full lg:max-w-[180px]'>Get Started</button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Newsletter;