import React from 'react';

const Contact = () => {
  return (
    <section className='section-sm lg:pt-[250px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]'
        data-aos-='zoom' data-aos-offset='400'>
{/* text */}
<div className='flex-1 flex flex-col justify-center pl-8'
data-aos='fade-down' data-aos-delay='300' data-aos-offset='500'>
  <h2 className='h2 mb-3 lg:mb-7'>Get in Touch With Us for Yoga Course.</h2>
  <p className='mb-7 lg;mb-0'>Get in touch with use for any kind of help.We are here to give you the best and also here to help you to find your yoga course.</p>
</div>
{/* form */}
<form className='flex-1  shadow-xl rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20'
data-aos='fade-up' data-aos-delay='300' data-aos-offset='500'>
  <input className='form-control' placeholder='First Name' type="text" name="First Name" required id="" />
  <input className='form-control' placeholder='Last Name' type="text" name="Last Name" required id="" />
  <input className='form-control' placeholder='Email Address' type="text" name="user email" required id="" />
  <textarea className='form-control bg-white py-5 h-[165px] resize-none ' placeholder='Message'></textarea>
  <button className='btn bg-orange btn-lg hover:bg-orange-200' type='submit' name='user_message'>Send message</button>
</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;