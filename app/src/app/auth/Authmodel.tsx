import React from 'react'
import Login from './login'
import Link from 'next/link';
type Props = {}

export default function Authmodel({}: Props) {

  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
    //Using TailwindCSS documentation
  return (

    <div className='absolute bg-opacity-60 w-full bg-black flex items-centre justify-center z-10' style={{ height: availableHeight }}>
      <div className='w-full absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center drop-shadow-2xl'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
          <div className='bg-gradient-to-r from-black to-grey-900 rounded-full shadow relative w-[70%] sm:w-[60%] lg:w-[40%] bg-blue-600 Uto-slate-900 mx-6'>
            <div className='overflow-hidden'>
              <Link href='/'>
              <button type='button' className='absolute bg-transparent rounded-1g text-l p-5 ml-auto inline-flex items-center hover:text-gray-400 hover:font-bold text-white top-0 right-7' >
              X
              </button>
              </Link>
            <Login/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}