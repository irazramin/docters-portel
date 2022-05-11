import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {
  return (
    <>
      <footer
        class='footer p-10 px-[100px]'
        style={{
          backgroundImage: `url(${footer})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <span class='footer-title'>Services</span>
          <a class='link link-hover'>Branding</a>
          <a class='link link-hover'>Design</a>
          <a class='link link-hover'>Marketing</a>
          <a class='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span class='footer-title'>Company</span>
          <a class='link link-hover'>About us</a>
          <a class='link link-hover'>Contact</a>
          <a class='link link-hover'>Jobs</a>
          <a class='link link-hover'>Press kit</a>
        </div>
        <div>
          <span class='footer-title'>Legal</span>
          <a class='link link-hover'>Terms of use</a>
          <a class='link link-hover'>Privacy policy</a>
          <a class='link link-hover'>Cookie policy</a>
        </div>
      </footer>
      <footer class=' px-10 py-4  text-center mt-[100px]'>
        <div class='text-center flex items-center justify-center'>
          <p className=''>Copyright 2022 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer