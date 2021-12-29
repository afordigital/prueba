import Head from 'next/head'
import React from 'react'

import Hero from '../components/Hero'
import Nav from '../components/Nav'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <div className='min-h-screen min-w-screen overflow-x-hidden font-poppins'>
      <Head>
        <title>Alessio Muganni</title>
      </Head>
      <div className='relative w-screen h-screen'>
        <Hero />
        <Nav />
      </div>
      <About />
      <ContactForm />
      <Footer />
    </div>
  )
}
