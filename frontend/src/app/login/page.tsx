import React from 'react'
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-100 '>
      <SignIn />
    </div>
  )
}

export default Login