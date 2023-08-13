import React from 'react'

type Props = {}

const Homescreen = (props: Props) => {
    
    const navbarHeight = 4;
    const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
    //Using TailwindCSS documentation
    return (
      <div className='relative' style={{ height: availableHeight }}>
        <div className='bg-red-500 absolute left-0 h-full w-[50%]'>
        </div>
        <div className='bg-yellow-500 absolute right-0 h-full w-[50%]'>
        </div>
    </div>
  )
}
export default Homescreen