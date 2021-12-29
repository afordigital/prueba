import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' class='w-screen bg-gray-300 mt-8 text-xl tracking-wide'>
      <div class='w-full max-w-7xl mx-auto flex flex-row px-4 py-8 font-semibold'>
        <p>Alessio Muganni</p>
        <div class='ml-auto flex flex-col md:flex-row cursor-pointer gap-12 text-xl'>
          <p>Home</p>
          <p>About me</p>
          <p>Contact</p>
        </div>
        <div class='ml-auto flex flex-col md:flex-row cursor-pointer gap-12'>
          <p><FaFacebookSquare /> </p>
          <p><FaLinkedin /> </p>
          <p><FaInstagram /> </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
