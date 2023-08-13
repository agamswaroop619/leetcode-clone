import React from 'react'
import Navbar from '../components/navbar';
import Authmodel from './Authmodel';
import Homescreen from '../homescreen';

type AuthPageProps = {}

function AuthPage({}: AuthPageProps) {
  return (
    <div>
      <Navbar/>
      <Authmodel/>
      <Homescreen/>
    </div>
  )
}

export default AuthPage;