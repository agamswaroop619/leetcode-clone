import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full bg-gray-600'>
      <nav className='flex items-center justify-between h-16 px-4'>
        <div className='text-white text-xl font-bold'>AlgoLab</div>
        <ul className='flex space-x-4'>
          <li>
            
            <Link href='/' className='text-white'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/problem' className='text-white'>
              Problems
            </Link>
          </li>
          <li>
            <Link href='/auth' className='text-white'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
