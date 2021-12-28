import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentAlt, FaCheckSquare } from 'react-icons/fa'
import Link from 'next/link'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm
