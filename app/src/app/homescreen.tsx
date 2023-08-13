import React from 'react'

type Props = {}

const Homescreen = (props: Props) => {
  return (
    <div className='relative h-[100vh] '>
        <div className='bg-red-500 absolute left-0 h-full w-[50%]'>
        </div>
        <div className='bg-yellow-500 absolute right-0 h-full w-[50%]'>
        </div>
    </div>
  )
}
export default Homescreen