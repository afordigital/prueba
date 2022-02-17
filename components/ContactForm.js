import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentAlt } from 'react-icons/fa'
import React, { useState } from 'react'
import Map from './Map'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Please input valid email')
    .required('Required'),
  number: Yup.number(),
  message: Yup.string().required('Required'),
  terms: Yup.boolean()
    .oneOf([true], 'Please accept our terms and conditions')
    .required('Required')
})

const mapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCCTGNeJgjIaxnzy-3zwJdhC-BXTuBUsoA'

const ContactForm = ({ refProp }) => {
  const [submittedForm, changeSubmittedForm] = useState(false)
  return (
    <>
      <div
        id='contact'
        className='w-full max-w-7xl mx-auto text-gray-800'
        ref={refProp}
      >
        <div className='pl-8 pr-8 pb-8 pt-4 md:p-4 md:pt-20 md:pb-20'>
          <h2 className='mb-5 justify-left text-4xl xl:text-5xl xl:mb-4 lg:mb-2 font-semibold tracking-wider'>
            CONTACT FORM
          </h2>
          <div className='w-full grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1 relative min-h-[200px] md:min-h-none pt-2'>
              <h2 className='text-justify text-base xl:text-xl 2xl:text-1xl mb-6'>
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </h2>
              <Map
                googleMapURL={mapURL}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Loading</p>}
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <div className='tracking-wider md:pl-8 lg:pl-16 pt-10 sm:pt-0 lg:pr-20 text-md sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                    terms: ''
                  }}
                  validationSchema={FormSchema}
                  onSubmit={({ values, resetForm }) => {
                    resetForm()
                    changeSubmittedForm(true)
                    setTimeout(() => changeSubmittedForm(false), 5000)
                  }}
                >
                  {({ values, errors, handleChange, setFieldValue }) => (
                    <Form className='formulario'>
                      <div>
                        <div className='inline-flex'>
                          <FaUser className='mt-1 mr-2' />
                          <label
                            htmlFor='name'
                            className='text-left font-semibold inline-flex'
                          >
                            Name
                          </label>
                        </div>
                        <div className='bg-blue-100 w-full h-10 lg:h-14 rounded-lg mt-3 mb-4 shadow-lg'>
                          <Field
                            type='text'
                            id='name'
                            name='name'
                            onChange={handleChange}
                            placeholder='Name'
                            className='primaryInput'
                          />
                        </div>
                        <div className='text-red-600 pb-1 lg:pb-3 font-weight: 600'>
                          <ErrorMessage
                            name='name'
                            component={() => (
                              <div className='error'>{errors.name}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='inline-flex'>
                          <FaEnvelope className='mt-1.5 mr-2' />
                          <label
                            htmlFor='email'
                            className='text-left font-semibold inline-flex'
                          >
                            Email
                          </label>
                        </div>
                        <div className='bg-blue-100 w-full h-10 lg:h-14 rounded-lg mt-3 mb-4 shadow-lg'>
                          <Field
                            type='text'
                            id='email'
                            name='email'
                            onChange={handleChange}
                            placeholder='Email Address'
                            className='primaryInput'
                          />
                        </div>
                        <div className='text-red-600 pb-1 lg:pb-3 font-weight: 600'>
                          <ErrorMessage
                            name='email'
                            component={() => (
                              <div className='error'>{errors.email}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='inline-flex'>
                          <FaPhoneAlt className='mt-1 mr-2' />
                          <label
                            htmlFor='number'
                            className='text-left font-semibold inline-flex'
                          >
                            Number (Optional)
                          </label>
                        </div>
                        <div className='bg-blue-100 w-full h-10 lg:h-14 rounded-lg mt-3 mb-4 shadow-lg'>
                          <input
                            type='text'
                            id='number'
                            name='number'
                            onChange={handleChange}
                            placeholder='Phone'
                            className='primaryInput'
                          />
                        </div>
                        <div className='text-red-600 pb-1 lg:pb-3 font-weight: 600'>
                          <ErrorMessage
                            name='number'
                            component={() => (
                              <div className='error'>{errors.number}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='inline-flex'>
                          <FaCommentAlt className='mt-1.5 mr-2' />
                          <label
                            htmlFor='message'
                            className='text-left font-semibold inline-flex'
                          >
                            Message
                          </label>
                        </div>
                        <div className=' w-full h-18 lg:h-24 rounded-lg '>
                          <textarea
                            name='message'
                            as='textarea'
                            placeholder='Message'
                            onChange={handleChange}
                            className='primaryInput'
                          />
                        </div>
                        <div className='text-red-600 pb-1 lg:pb-3 font-weight: 600'>
                          <ErrorMessage
                            name='message'
                            component={() => (
                              <div className='error'>{errors.message}</div>
                            )}
                          />
                        </div>
                      </div>
                      <div className='justify-center text-center'>
                        <div className='font-semibold inline-flex'>
                          <label className='w-full'>
                            <Field
                              type='checkbox'
                              onChange={() => {
                                if (values.terms) {
                                  setFieldValue('terms', false)
                                }
                                if (!values.terms) {
                                  setFieldValue('terms', true)
                                }
                              }}
                              id='terms'
                              checked={values.terms}
                              className='w-5 h-5 mr-3'
                              name='terms'
                              value='terms'
                            />
                            Accept Terms and Conditions
                          </label>
                        </div>
                        <div className='text-red-600 pb-1 lg:pb-3font-weight: 600'>
                          <ErrorMessage
                            name='terms'
                            component={() => (
                              <div className='error'>{errors.terms}</div>
                            )}
                          />
                        </div>
                        <div className='text-center p-3 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointers tracking-wider'>
                          <nav className='w-full h-12 pt-2 bg-blue-500 text-gray-50 rounded-full shadow-xl hover:bg-blue-700  ease-in duration-200'>
                            <button type='submit'>SUBMIT</button>
                          </nav>
                        </div>
                        {submittedForm && (
                          <p className='exito'>Formulario enviado con éxito!</p>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
