import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col mb-4 md:mb-0'>
          <p className='text-lg font-semibold mb-2 text-gray-300'>Company Policies</p>
          <a href='#' className='text-sm hover:text-gray-400'>
            Privacy Policy
          </a>
          <a href='#' className='text-sm hover:text-gray-400'>
            Terms of Service
          </a>
        </div>
        <div className='flex flex-col mb-4 md:mb-0'>
          <p className='text-lg font-semibold mb-2 text-gray-300'>Contact Us</p>
          <a href='#' className='text-sm hover:text-gray-400'>
            Email: info@example.com
          </a>
          <a href='#' className='text-sm hover:text-gray-400'>
            Phone: (123) 456-7890
          </a>
        </div>
        <div className='flex flex-col mb-4 md:mb-0'>
          <p className='text-lg font-semibold mb-2 text-gray-300'>Social Media</p>
          <div className='flex gap-x-2'>
            <a href='#' className='text-sm hover:text-gray-400'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='text-sm hover:text-gray-400'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-sm hover:text-gray-400'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='text-sm hover:text-gray-400'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <p className='text-lg font-semibold mb-2 text-gray-300'>&copy; 2024 Your Company</p>
          <p className='text-sm text-gray-400'>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
