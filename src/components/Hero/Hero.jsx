import React from 'react'
import { NavLink } from 'react-router-dom'
import { startLink } from '../../constants'
import { HiArrowUpRight } from "react-icons/hi2";
import QuizImage from '../../assets/images/3d-quiz.webp'

const Hero = () => {
  return (
    <section className='generalContainer min-w-full '>
      <div className='md:flexCenterAll relative'>
        <div className='basis-1/2 flexStartAll gap-5 pt-12 '>
          <div>            
            <h1 className='main-title '>Improve Your Mind</h1>           
            <p className='text-sm md:text-base text-gray-500'>Do you like quizes and competitions? Find or create quize on any topic! Play,share and study in one app.</p>
          </div>

          <div className='flex gap-2 w-full'>
            <NavLink to={startLink}  className=' flexCenterAll gap-1 bg-slate-900 text-slate-50 rounded-full px-10 py-3 text-md md:text-xl arrow-nav'>
              Begin <HiArrowUpRight /> 
            </NavLink> 
          </div>

        </div>

        <div className='basis-1/2 '>
            <img src={QuizImage} alt="quiz" className='' />
        </div>
      </div>
    </section>
  )
}

export default Hero