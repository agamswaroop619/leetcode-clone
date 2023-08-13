import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full bg-gradient-to-r from-black to-grey-800 font-mono'>
      <nav className='flex items-center justify-between h-16 px-4'>
        <div className='text-white text-xl font-bold select-none'>AlgoLab<span className='text-2xl'>
          🔬
          </span>
          </div>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='text-white hover:text-blue-500'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/problem' className='text-white hover:text-blue-500'>
              Problems
            </Link>
          </li>
          <li>
            <Link href='/auth' className='text-white hover:text-blue-500'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
