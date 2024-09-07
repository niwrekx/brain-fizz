import React, { useEffect, useState } from 'react'

import Logo from './Logo'



const Navbar = () => {
  const [headerBG, setHeaderBG] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeaderBG(true) : setHeaderBG(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  },[])



  return (
    <header 
      className={`
        generalContainer min-w-full fixed top-0 z-50 w-full transition-all duration-100 ease-in-out delay-50
        ${headerBG ? 'bg-sky-50/80 backdrop-blur-md shadow-md dark:bg-neutral-900/90 menu-dropdown ' : ''}`}
    >
      <div className='flexCenterBetween generalpadding'>
        <Logo />
        <div className='flex gap-4 '>
          {/* <NavbarItemsLink />
          <ModeToggle />
          <MobileMenu /> */}
        </div>
      </div>

    </header>
  )
}

export default Navbar