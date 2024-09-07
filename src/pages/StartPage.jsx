import React from 'react'
import WelcomeForm from '../components/Form/WelcomeForm'

const StartPage = () => {
  return (
    <section className='generalContainer  min-w-full green-gradient '>
       <div className='flexCenterAllColumn min-h-screen generalpadding '>
        <div className='flexCenterAllColumn pb-5'>
          <h2 className='sub-title'>Welcome</h2>
          <p className='text-md md:text-xl text-center'>Enter your name and choose the level.</p>
        </div>

        <div className=' w-full'>
          <WelcomeForm />
        </div>
      </div>         
    </section>
  )
}

export default StartPage