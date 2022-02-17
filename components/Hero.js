import Image from 'next/image'

const Hero = () => {
  return (
    <div id='hero' className='h-screen w-screen relative'>
      <div className='bg-gradient-to-t from-gray-700 via-transparent to-transparent bg-opacity-10 absolute top-0 h-screen z-10 w-screen' />
      <Image
        src='/hero-cover.jpg'
        layout='fill'
        objectFit='cover'
        objectPosition='0% 50%s'
      />
      <div className='absolute top-0 h-screen w-screen z-20'>
        <div className='h-screen w-full max-w-7xl mx-auto flex flex-row'>
          <h1 className='mt-auto mb-16 p-8 md:p-4 text-3xl md:text-5xl xl:text-7xl text-white'>
            I CALL ARCHITECTURE THE FROZEN MUSIC
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
