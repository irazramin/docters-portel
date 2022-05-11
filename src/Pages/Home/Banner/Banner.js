import React from 'react';
import chairBg from '../../../assets/images/bg.png';
import heroBg from '../../../assets/images/chair.png';
const Banner = () => {
  return (
    <div
      className='hero lg:h-[80vh] mb-5'
      style={{
        backgroundImage: `url(${chairBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={heroBg} className='max-w-sm rounded-lg shadow-2xl' alt='' />
        <div>
          <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
          <p className='py-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className='btn btn-primary text-white bg-gradient-to-r from-secondary to-primary'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner