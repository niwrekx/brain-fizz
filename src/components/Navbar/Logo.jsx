import React from 'react'
import { VscDebugContinueSmall } from "react-icons/vsc";

const Logo = () => {
  return (
    <a href='/'>
      <div className='flexCenterAll gap-1'>     
        <VscDebugContinueSmall className='text-2xl '/>
        <h5 className='font-bold text-2xl'>
          brain<span className='text-teal-400'>fizz</span>
        </h5>

      </div>
 
    </a>
  )
}

export default Logo