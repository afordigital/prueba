import Head from 'next/head'
import { useRef } from 'react'

import Hero from 'components/Hero'
import Nav from 'components/Nav'
import { About } from 'components/About'
import ContactForm from 'components/ContactForm'
import Footer from 'components/Footer'

export default function Home () {
  const contactRef = useRef(null)
  const aboutRef = useRef(null)

  console.log('THE PROP', aboutRef)

  return (
    <div className='min-h-screen min-w-screen overflow-x-hidden font-poppins'>
      <Head>
        <title>Alessio Muganni</title>
      </Head>
      <div className='relative w-screen h-screen'>
        <Hero />
        <Nav aboutRef={aboutRef} contactRef={contactRef} />
      </div>
      <About refProp={aboutRef} />
      <ContactForm refProp={contactRef} />
      <Footer />
    </div>
  )
}
