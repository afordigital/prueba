import Link from 'next/link'

const About = () => {
  return (
    <div class='container mx-auto p-20 max-h-full'>
      <div class='relative flex flex-col-reverse flex-wrap lg:flex-row items-center gap-16 mt-14 lg:mt-28'>
        <div class='flex flex-1 flex-col items-center'>
          <img class='rounded-lg' src='/alessio.jpg' alt='Alessio Muganni' />
        </div>
        <div class='flex flex-1 flex-col lg:items-start'>
          <h2 class='mb-5 text-5xl justify-left lg:text-3xl xl:text-5xl xl:mb-4 lg:mb-2 font-bold tracking-wider'>ABOUT ME</h2>
          <div>
            <h3 class='text-justify text-md sm:text-lg md:text-xl lg:text-base xl:text-xl 2xl:text-1xl mb-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </h3>
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
