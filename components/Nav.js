import React from 'react'
import { FaBars } from 'react-icons/fa'

const Nav = ({ aboutRef, contactRef }) => {
  return (
    <div
      id='nav'
      className='absolute top-0 h-screen w-screen z-20 overflow-x-hidden'
    >
      <div className='hidden h-screen w-full max-w-7xl mx-auto text-white lg:flex flex-row pt-8 p-4 tracking-wider'>
        <p className='text-3xl'>Alessio Muganni</p>
        <div className='flex flex-row ml-auto cursor-pointer gap-4 text-2xl h-10'>
          <div
            className='hover:underline offset cursor-pointer'
            onClick={() => {
              aboutRef.current.scrollIntoView()
            }}
          >
            ABOUT ME
          </div>
          <div
            className='hover:underline hover:underline-offset-4 cursor-pointer'
            onClick={() => {
              contactRef.current.scrollIntoView()
            }}
          >
            CONTACT
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-row max-w-4xl absolute text-xl sm:text-4xl sm:gap-80'>
        <div className='flex-1 flex-row w-96  mx-auto sm:text-3xl text-white pt-6 p-8 tracking-wider'>
          <p>Alessio Muganni</p>
        </div>
        <div className='flex-1 flex-row pt-8 p-8 w-44 sm:w-64 sm:text-3xl text-white'>
          <FaBars />
        </div>
      </div>
    </div>
  )
}

export default Nav
