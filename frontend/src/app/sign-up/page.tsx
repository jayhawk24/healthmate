import React from 'react'
import { SignUp as ClerkSignUp } from '@clerk/nextjs'

type Props = {}

const SignUp = (props: Props) => {
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-gray-100 '>
            <ClerkSignUp />
        </div>
    )
}

export default SignUp 