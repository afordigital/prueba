import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer class='bottom-0 inset-x-0 bg-gray-300 w-screen flex flex-col tracking-wider sm:flex-row text-xl font-semibold items:center pb-6 pt-12'>
        <div class='container flex flex-wrap mx-auto items-center justify-center m-1 md:justify-center gap-12 cursor-pointer'>
          <p>Alessio Muganni</p>
        </div>
        <div class='container flex flex-wrap mx-auto flex-col md:flex-row items-center justify-center md:justify-center md:gap-12 gap-4 m-4 cursor-pointer'>
          <p>Home</p>
          <p>About me</p>
          <p>Contact</p>
        </div>
        <div class='container flex flex-wrap mx-auto mt-2 md:mt-0 items-center justify-center md:justify-center gap-12 cursor-pointer'>
          <p><FaFacebookSquare /> </p>
          <p><FaLinkedin /> </p>
          <p><FaInstagram /> </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
