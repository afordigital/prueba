import { FaBars } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='h-screen w-screen relative'>
      <div className='bg-gradient-to-t from-gray-700 via-transparent to-transparent bg-opacity-10 absolute top-0 h-screen z-10 w-screen' />
      <Image src='/hero-cover.jpg' layout='fill' objectFit='cover' />
      <nav className='flex items-center tracking-wide ml-16 pt-10 2xl:text-2xl xl:text-2xl lg:text-lg md:text-md sm:text-md font-semibold text-white'>
        <div className='visible md:invisible flex flex-1 flex-end justify-end pr-0 md:pr-20 cursor-pointer gap-12'>
          <FaBars />
        </div>
      </nav>
      <div className='absolute top-0 h-screen w-screen z-20'>
        <div className='h-screen w-full max-w-7xl mx-auto flex flex-row'>
          <h1 className='mt-auto mb-16 p-8 md:p-4 text-3xl md:text-5xl xl:text-7xl text-white'>
            {' '}
            I CALL ARCHITECTURE THE FROZEN MUSIC
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
