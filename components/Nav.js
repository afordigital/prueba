import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
  return (
    <div
      id='nav'
      className='absolute top-0 h-screen w-screen z-20 overflow-x-hidden'
    >
      <div className='hidden h-screen w-full max-w-7xl mx-auto text-white lg:flex flex-row pt-8 p-4 tracking-wider text-3xl'>
        <p>Alessio Muganni</p>
        <div className='flex flex-row ml-auto cursor-pointer gap-4'>
          <div className='hover:text-gray-200 hover:font-medium'>
            <Link href='/'>HOME</Link>
          </div>
          <div className='hover:text-gray-200 hover:font-medium'>
            <Link href='/about'>ABOUT ME</Link>
          </div>
          <div className='hover:text-gray-200 hover:font-medium'>
            <Link href='/contact'>CONTACT</Link>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-row absolute text-xl sm:text-4xl sm:gap-80'>
        <div className='flex-1 flex-row w-96 max-w-4xl mx-auto text-white pt-6 p-8 tracking-wider'>
          <p>Alessio Muganni</p>
        </div>
        <div className='flex-1 flex-row pt-8 p-8 w-64 text-white'>
          <FaBars />
        </div>
      </div>
    </div>
  )
}

export default Nav
