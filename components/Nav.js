import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
  return (
    <div
      id='nav'
      className='absolute top-0 h-screen w-screen z-20 overflow-x-hidden'
    >
      <div className='hidden sm:block'>
        <div className='absolute h-screen w-full max-w-7xl mx-auto text-white pt-8 flex flex-row md:p-4 tracking-wider'>
          <p className='text-3xl'>Alessio Muganni</p>
          <div className='flex flex-row ml-auto text-xl gap-8 cursor-pointer h-7'>
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
      </div>
      <div className='sm:hidden flex flex-row absolute'>
        <div className='flex-1 flex-row w-80 max-w-4xl mx-auto text-white pt-6 p-8 tracking-wider'>
          <p className='text-xl'>Alessio Muganni</p>
        </div>
        <div className='flex-1 flex-row pt-8 p-8 w-64 text-white'>
          <FaBars />
        </div>
      </div>
    </div>
  )
}

export default Nav
