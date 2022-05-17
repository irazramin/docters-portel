import React from 'react';
import appoinBg from '../../../assets/images/appointment.png';

const HomeContactus = () => {
  return (
    <div
      className='hero mt-[150px]'
      style={{
        backgroundImage: `url(${appoinBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-content flex-col my-[70px]'>
        <div className='text-center mb-[40px] '>
          <div className='text-center'>
            <h4 className='uppercase text-primary font-semibold text-xl'>
              Contact Us
            </h4>
            <p className='mt-2 text-4xl text-white'>Stay connected with us</p>
          </div>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Subject</span>
              </label>
              <input
                type='text'
                placeholder='subject'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Message</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-20'
                placeholder='message'
              ></textarea>
            </div>
            <div className='form-control mt-3'>
              <button className='btn btn-primary text-white bg-gradient-to-r from-secondary to-primary'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactus