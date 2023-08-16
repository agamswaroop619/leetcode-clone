import React from 'react'

type LoginProps = {}

const Login = (props: LoginProps) => {
  return (
    <div className='py-5 px-10' >
      <p className='text-2xl text-center font-bold font-mono'>Sign In</p>
        <form className='font-mono italic p-2'>
        <label className='p-2' htmlFor='email'>E-Mail</label>
        <input className='w-full rounded-full focus:ring-white border-2 outline text-black p-1' type='email' name='email' id='email' placeholder='example_email@mail.org' ></input>
        <label className='p-2' htmlFor='password'>Password</label>
        <input className='w-full rounded-full focus:ring-white border-2 outline text-black p-1' type='password' name='password' id='password' placeholder='********' ></input>
        </form>
    </div>
  )
}
export default Login;