const Nav = () => {
  return (
    <div id='nav' className='absolute top-0 h-screen w-screen z-20 overflow-x-hidden'>
      <div className='h-screen w-full max-w-7xl mx-auto text-white pt-8 flex flex-row p-4'>
        <p className='text-3xl'>Alessio Muganni</p>
        <div className='flex flex-row ml-auto text-3xl gap-5 cursor-pointer'>
          <p className='mr-4'> Home</p>
          <p className='mr-4'> About me</p>
          <p className='mr-4'> Contact </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
