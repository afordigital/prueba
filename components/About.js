import Link from 'next/link'

const About = () => {
  return (
    <div id='about'>
      <div
        id='about'
        className='hidden md:block w-full max-w-7xl mx-auto p-4 pt-20 text-gray-800'
      >
        <div className='w-full grid grid-cols-2'>
          <div className='col-span-2 md:col-span-1 relative min-h-[200px] md:min-h-none'>
            <img
              className='rounded-lg'
              src='/alessio.jpg'
              alt='Alessio Muganni'
            />
          </div>
          <div className='col-span-2 md:col-span-1 p-10'>
            <h2 className='mb-5 text-5xl justify-left lg:text-3xl xl:text-5xl xl:mb-4 lg:mb-2 font-semibold tracking-wider'>
              ABOUT ME
            </h2>
            <div>
              <h3 className='text-justify text-md sm:text-lg md:text-xl lg:text-base xl:text-xl 2xl:text-1xl mb-6'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.{' '}
              </h3>
              <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                <nav className='w-full h-12 pt-2 bg-blue-500 text-gray-50 rounded-full shadow-xl hover:bg-blue-700  ease-in duration-200'>
                  <Link href='/timeline'>VIEW MY PORTFOLIO</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block md:hidden mx-auto'>
        <div className='p-8'>
          <h2 className='mb-5 text-4xl font-semibold tracking-wide'>
            ABOUT ME
          </h2>
          <img
            className='rounded-lg mb-5'
            src='/alessio.jpg'
            alt='Alessio Muganni'
          />
          <div>
            <h3 className='text-justify text-md mb-6'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.{' '}
            </h3>
            <div className='text-center tracking-wider'>
              <nav className='w-full h-12 pt-2 bg-blue-500 text-gray-50 rounded-full shadow-xl hover:bg-blue-700  ease-in duration-200'>
                <Link href='/timeline'>VIEW MY PORTFOLIO</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
