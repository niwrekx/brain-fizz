import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { categoryLink, quizLink, resultsLink } from '../constants'

const MainLayout = () => {

  const location = useLocation();


  const noHeaderRouter = [categoryLink, quizLink, resultsLink];
  const hideHeaderFooter = noHeaderRouter.includes(location.pathname);
  
  return (
    <>
      {!hideHeaderFooter && <Navbar /> }
      
      <Outlet />
      {!hideHeaderFooter && <Footer />}
      
    </>
  )
}

export default MainLayout