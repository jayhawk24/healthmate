import Navigation from '@/components/navigation'
import React from 'react'
import Image from 'next/image'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-4">
      <Navigation />
    </div>
  )
}

export default Index