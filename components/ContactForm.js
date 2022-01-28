import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentAlt,
  FaCheckSquare
} from 'react-icons/fa'
// import Link from 'next/link'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ContactForm = () => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <>
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
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                  }}
                  validate={valores => {
                    const errores = {}

                    // Name Validation
                    if (!valores.name) {
                      errores.name = 'Por favor ingresa un name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                      errores.name =
                        'El name solo puede contener letras y espacios'
                    }

                    // Email Validation
                    if (!valores.email) {
                      errores.email = 'Por favor ingresa un email'
                    } else if (
                      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        valores.email
                      )
                    ) {
                      errores.email =
                        'El email solo puede contener letras, números, puntos, guiones y guión bajo'
                    }

                    // Number Validation
                    if (!/^[0-9]{2,3}-? ?[0-9]{6,7}$/.test(valores.number)) {
                      errores.number = 'El número no es válido'
                    }

                    // Message Validation
                    if (!valores.message) {
                      errores.message = 'Por favor escribe un mensaje'
                    }

                    return errores
                  }}
                  onSubmit={(valores, { resetForm }) => {
                    resetForm()
                    changeSubmittedForm(true)
                    setTimeout(() => changeSubmittedForm(false), 5000)
                  }}
                >
                  {({ errors }) => (
                    <Form className='formulario'>
                      <div>
                        <div class='inline-flex'>
                          <FaUser className='mt-1 mr-2' />
                          <label
                            htmlFor='name'
                            className='text-left font-semibold inline-flex'
                          >
                            Name
                          </label>
                        </div>
                        <div className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg'>
                          <Field
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Name'
                            className='decoration-none bg-blue-100 rounded-lg pl-3 pt-1'
                          />
                        </div>
                        <ErrorMessage
                          name='name'
                          component={() => (
                            <div className='error'>{errors.name}</div>
                          )}
                        />
                      </div>
                      <div>
                        <div class='inline-flex'>
                          <FaEnvelope className='mt-1.5 mr-2' />
                          <label
                            htmlFor='email'
                            className='text-left font-semibold inline-flex'
                          >
                            Email
                          </label>
                        </div>
                        <Field
                          type='text'
                          id='email'
                          name='email'
                          placeholder='Email Address'
                          className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg'
                        />
                        <ErrorMessage
                          name='email'
                          component={() => (
                            <div className='error'>{errors.email}</div>
                          )}
                        />
                      </div>
                      <div>
                        <div class='inline-flex'>
                          <FaPhoneAlt className='mt-1 mr-2' />
                          <label
                            htmlFor='number'
                            className='text-left font-semibold inline-flex'
                          >
                            Number
                          </label>
                        </div>
                        <Field
                          type='text'
                          id='number'
                          name='number'
                          placeholder='Phone'
                          className='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg'
                        />
                        <ErrorMessage
                          name='number'
                          component={() => (
                            <div className='error'>{errors.number}</div>
                          )}
                        />
                      </div>
                      <div>
                        <div class='inline-flex'>
                          <FaCommentAlt className='mt-1.5 mr-2' />
                          <label
                            htmlFor='message'
                            className='text-left font-semibold inline-flex'
                          >
                            Message
                          </label>
                        </div>
                        <Field
                          name='message'
                          as='textarea'
                          placeholder='Message'
                          className='bg-blue-100 w-full h-24 rounded-lg mt-3 mb-4 shadow-lg'
                        />
                        <ErrorMessage
                          name='message'
                          component={() => (
                            <div className='error'>{errors.message}</div>
                          )}
                        />
                      </div>
                      <button type='submit'>Enviar</button>

                      {submittedForm && (
                        <p className='exito'>Formulario enviado con éxito!</p>
                      )}
                    </Form>
                  )}
                </Formik>
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
