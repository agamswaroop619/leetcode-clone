import React from 'react'
import Login from './login'
import Link from 'next/link';
type Props = {}

export default function Authmodel({}: Props) {

  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
    //Using TailwindCSS documentation
  return (

    <div className='absolute bg-opacity-60 h- w-full bg-black flex items-centre justify-center z-10' style={{ height: availableHeight }}>
      <div className='w-full sm:w-[450x] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
          <div className='bg-gradient-to-r from-black to-grey-900 rounded-full shadow relative w-[40%] bg-blue-600 Uto-slate-900 mx-6'>
            <div className='flex justify-end p-2'>
              <Link href='/'>
              <button type='button' className='bg-transparent rounded-1g text-sm p-1.5 ml -auto inline-flex items-center hover:bg-gray-800•hover:text-white text-white'>
              X
              </button>
              </Link>
              <Login></Login>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}