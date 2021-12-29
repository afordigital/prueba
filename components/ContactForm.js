import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentAlt, FaCheckSquare } from 'react-icons/fa'
import Link from 'next/link'

const ContactForm = () => {
  return (
    <div id='contact' class='w-full max-w-7xl mx-auto p-4 pt-20 pb-20'>
      <div>
        <h2 class='text-5xl lg:text-3xl xl:text-5xl font-semibold tracking-wider'>CONTACT FORM</h2>
        <div class='w-full grid grid-cols-2'>
          <div class='col-span-2 md:col-span-1 relative min-h-[200px] md:min-h-none pt-2'>
            <h2 class='text-justify text-md pt-2 sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>Now that you know a lot about me, let me know if you are interested to work with me.</h2>
            <img src='/maps-alessio.JPG' class='w-full pt-8' />
          </div>
          <div class='col-span-2 md:col-span-1'>
            <div class='tracking-wider text-gray-800 pl-16 md:pl-12 pr-20 text-md sm:text-lg md:text-xl lg:text-base xl:text-2xl 2xl:text-xl'>
              <div class='text-left font-semibold inline-flex'>
                <FaUser class='mt-1' /><p class='pl-3'>Name</p>
              </div>
              <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
              <div class='text-left font-semibold inline-flex'>
                <FaEnvelope class='mt-1' /><p class='pl-3'>Email</p>
              </div>
              <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
              <div class='text-left font-semibold inline-flex'>
                <FaPhoneAlt class='mt-1' /><p class='pl-3'>Phone (Optional)</p>
              </div>
              <div class='bg-blue-100 w-full h-14 rounded-lg mt-3 mb-4 shadow-lg' />
              <div class='text-left font-semibold inline-flex'>
                <FaCommentAlt class='mt-1' /><p class='pl-3'>Message</p>
              </div>
              <div class='bg-blue-100 w-full h-24 rounded-lg mt-3 mb-4 shadow-lg' />
              <div class='justify-center text-center'>
                <div class='font-semibold inline-flex'>
                  <FaCheckSquare class='mt-1' /><p class='pl-3'>Accept Terms and Conditions</p>
                </div>
                <nav class='text-center p-3 m-5 justify-center md:text-4 lg:text-base xl:text-xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-gray-50 rounded-full'>
                  <Link href=''>SUBMIT</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
