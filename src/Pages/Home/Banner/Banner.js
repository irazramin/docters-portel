import React from 'react';
import heroBg from '../../../assets/images/chair.png';
const Banner = () => {
  return (
    <div
      class='hero  bg-base-900 bg-scroll lg:h-[80vh] mb-5'
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.90),rgba(255,255,255,0.9)) ,url(${heroBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div class='hero-content flex-col lg:flex-row-reverse'>
        <img src={heroBg} class='max-w-sm rounded-lg shadow-2xl' alt='' />
        <div>
          <h1 class='text-5xl font-bold'>Your New Smile Starts Here</h1>
          <p class='py-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button class='btn btn-primary text-white bg-gradient-to-r from-secondary to-primary'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner