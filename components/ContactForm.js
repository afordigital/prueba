import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentAlt,
  FaCheckSquare
} from 'react-icons/fa'
// import Link from 'next/link'
import React from 'react'
import { Formik } from 'formik'

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          email: ''
        }}
        onSubmit={() => {
          console.log('Formulario enviado')
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <form className='formulario' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                placeholder='name'
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='name@email.com'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type='submit'>Enviar</button>
          </form>
        )}
      </Formik>
      <div id='contact' className='w-full max-w-7xl mx-auto p-4 pt-20 pb-20'>
        <div>
          <h2 className='text-5xl lg:text-3xl xl:text-5xl font-semibold tracking-wider'>
            CONTACT FORM
          </h2>
          <div className='w-full grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1 relative min-h-[200px] md:min-h-none pt-2'>
              <h2 className='text-justify text-md pt-2 sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </h2>
              <img src='/maps-alessio.JPG' className='w-full pt-8' />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div className='tracking-wider text-gray-800 pl-16 md:pl-12 pr-20 text-md sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>
                <div className='text-left font-semibold inline-flex'>
                  <FaUser className='mt-1' />
                  <p className='pl-3'>Name</p>
                </div>
                <div className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
                <div className='text-left font-semibold inline-flex'>
                  <FaEnvelope className='mt-1' />
                  <p className='pl-3'>Email</p>
                </div>
                <div className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
                <div className='text-left font-semibold inline-flex'>
                  <FaPhoneAlt className='mt-1' />
                  <p className='pl-3'>Phone (Optional)</p>
                </div>
                <div className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
                <div className='text-left font-semibold inline-flex'>
                  <FaCommentAlt className='mt-1' />
                  <p className='pl-3'>Message</p>
                </div>
                <div className='bg-blue-100 w-full h-24 rounded-lg mt-3 mb-4 shadow-lg' />
                <div className='justify-center text-center'>
                  <div className='font-semibold inline-flex'>
                    <FaCheckSquare className='mt-1' />
                    <p className='pl-3'>Accept Terms and Conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
