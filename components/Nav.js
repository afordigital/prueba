const Nav = () => {
  return (
    <div id='nav' class='absolute top-0 h-screen w-screen z-20 overflow-x-hidden'>
      <div class='h-screen w-full max-w-7xl mx-auto text-white pt-8 flex flex-row p-4'>
        <p class='text-3xl'>Alessio Muganni</p>
        <div class='flex flex-row ml-auto text-3xl gap-5 cursor-pointer'>
          <p class='mr-4'> Home</p>
          <p class='mr-4'> About me</p>
          <p class='mr-4'> Contact </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
