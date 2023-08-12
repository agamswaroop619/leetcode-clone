import React from 'react'
import Navbar from '../components/navbar';
import Authmodel from './Authmodel';

type AuthPageProps = {}

function AuthPage({}: AuthPageProps) {
  return (
    <div>
      <Navbar/>
      <Authmodel/>
      
    </div>
  )
}

export default AuthPage;