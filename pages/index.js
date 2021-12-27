import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { FaFacebookSquare, FaLinkedin, FaInstagram, FaUser, FaEnvelope, FaPhoneAlt, FaCommentAlt, FaCheckSquare, FaBars } from 'react-icons/fa'

export default function Home () {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Alessio Muganni</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='css' href='/tailwind.css' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap' />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
        </style>
      </Head>
      <div class='font-sans-serif'>
        <div class='absolute bg-gradient-to-t from-gray-700 via-transparent to-transparent h-screen w-full' />
        <div class='sm:w-full bg-hero-img h-screen bg-cover'>
          <header>
            <nav class='flex items-center tracking-wide ml-16 pt-10 2xl:text-2xl xl:text-2xl lg:text-lg md:text-md sm:text-md font-semibold text-white'>
              <div>Alessio Muganni</div>
              <div class='visible md:invisible flex flex-1 flex-end justify-end pr-0 md:pr-20 cursor-pointer gap-12'>
                <FaBars />
              </div>
              <ul class='invisible md:visible sm:flex flex-1 flex-end justify-end pr-20 cursor-pointer gap-12'>
                <li>Home</li>
                <li>About me</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div class='text-white text-3xl sm:text-4xl md:text-5xl xl:6xl font-bold tracking-wider text-left p-20 absolute bottom-10'>
              <p>I CALL ARCHITECTURE THE FROZEN MUSIC</p>
            </div>
          </header>
        </div>
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
        <section class='container mx-auto'>
          <div class='flex flex-wrap flex-col lg:w-1/2 p-20 lg:float-left'>
            <h2 class='mb-5 text-5xl sm:justify-left lg:text-3xl xl:text-5xl xl:mb-4 lg:mb-2 font-bold tracking-wider'>CONTACT FORM</h2>
            <h2 class='text-justify text-md sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl mb-6'>Now that you know a lot about me, let me know if you are interested to work with me.</h2>
            <img class='items-center lg:items-start rounded-lg' src='/maps-alessio.JPG' alt='maps' />
          </div>
          <div class='flex flex-wrap flex-col tracking-wider lg:w-1/2 lg:float-right pt-10 lg:pt-32 pl-16 md:pl-12 pr-20 text-md sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>
            <div class='text-left font-bold inline-flex'>
              <FaUser class='mt-1' /><p class='pl-3'>Name</p>
            </div>
            <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
            <div class='text-left font-bold inline-flex'>
              <FaEnvelope class='mt-1' /><p class='pl-3'>Email</p>
            </div>
            <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
            <div class='text-left font-bold inline-flex'>
              <FaPhoneAlt class='mt-1' /><p class='pl-3'>Phone (Optional)</p>
            </div>
            <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
            <div class='text-left font-bold inline-flex'>
              <FaCommentAlt class='mt-1' /><p class='pl-3'>Message</p>
            </div>
            <div class='bg-blue-100 w-full h-24 rounded-lg mt-3 mb-4 shadow-lg' />
            <div class='justify-center text-center'>
              <div class='font-bold inline-flex'>
                <FaCheckSquare class='mt-1' /><p class='pl-3'>Accept Terms and Conditions</p>
              </div>
              <nav class='text-center p-3 m-5 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-gray-50 rounded-full'>
                <Link href=''>SUBMIT</Link>
              </nav>
            </div>
          </div>
        </section>
        <div>
          <footer class='container bg-gray-300 w-screen flex flex-col tracking-wider sm:flex-row text-xl font-semibold items:center pb-6 pt-12'>
            <div class='flex flex-wrap mx-auto items-center justify-center m-1 md:justify-center gap-12 cursor-pointer'>
              <p>Alessio Muganni</p>
            </div>
            <div class='flex flex-wrap mx-auto flex-col md:flex-row items-center justify-center md:justify-center md:gap-12 gap-4 m-4 cursor-pointer'>
              <p>Home</p>
              <p>About me</p>
              <p>Contact</p>
            </div>
            <div class='flex flex-wrap mx-auto mt-2 md:mt-0 items-center justify-center md:justify-center gap-12 cursor-pointer'>
              <p><FaFacebookSquare /> </p>
              <p><FaLinkedin /> </p>
              <p><FaInstagram /> </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
