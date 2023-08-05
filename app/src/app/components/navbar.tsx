import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full bg-gray-600'>
      <nav className='flex items-center justify-between h-16 px-4'>
        <div className='text-white text-xl font-bold'>AlgoLab</div>
        <ul className='flex space-x-4'>
          <li>
            <a href='#' className='text-white'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='text-white'>
              Problems
            </a>
          </li>
          <li>
            <a href='#' className='text-white'>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
