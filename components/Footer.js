import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div
        id='footer'
        className='hidden sm:block w-screen bg-gray-300 mt-8 text-xl tracking-wide'
      >
        <div className='w-full max-w-7xl mx-auto flex flex-row px-4 py-8 font-semibold'>
          <p>Alessio Muganni</p>
          <div className='ml-auto flex flex-col md:flex-row cursor-pointer gap-12 text-xl'>
            <p>Home</p>
            <p>About me</p>
            <p>Contact</p>
          </div>
          <div className='ml-auto flex flex-col md:flex-row cursor-pointer gap-12'>
            <p>
              <FaFacebookSquare />{' '}
            </p>
            <p>
              <FaLinkedin />{' '}
            </p>
            <p>
              <FaInstagram />{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='sm:hidden w-screen bg-gray-300 mt-8 text-xl tracking-wide text-center text-gray-800'>
        <div className='w-full max-w-4xl flex flex-col py-8 font-semibold gap-y-3'>
          <p>Alessio Muganni</p>
          <div className='flex flex-col gap-y-2'>
            <p>Home</p>
            <p>About me</p>
            <p>Contact</p>
          </div>
          <div className='flex flex-col mb-4 mt-4'>
            <div className='flex flex-row gap-x-3 text-center px-32'>
              <p className='flex-1 flex-row'>
                <FaFacebookSquare />
              </p>
              <p className='flex-1 flex-row'>
                <FaLinkedin />
              </p>
              <p className='flex-1 flex-row'>
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
