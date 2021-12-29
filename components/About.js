import Link from 'next/link'

const About = () => {
  return (
    <div id='about' class='w-full max-w-7xl mx-auto p-4 pt-20'>
      <div class='w-full grid grid-cols-2'>
        <div class='col-span-2 md:col-span-1 relative min-h-[200px] md:min-h-none'>
          <img class='rounded-lg' src='/alessio.jpg' alt='Alessio Muganni' />
        </div>
        <div class='col-span-2 md:col-span-1 p-10'>
          <h2 class='mb-5 text-5xl justify-left lg:text-3xl xl:text-5xl xl:mb-4 lg:mb-2 font-semibold tracking-wider text-gray-800'>ABOUT ME</h2>
          <div>
            <h3 class='text-justify text-md sm:text-lg md:text-xl lg:text-base xl:text-xl 2xl:text-1xl mb-6 text-gray-800'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </h3>
            <nav class='text-center p-3 m-5 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-gray-50 rounded-full'>
              <Link href='/timeline'>VIEW MY PORTFOLIO</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
