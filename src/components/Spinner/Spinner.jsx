import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: 'auto ',
};

const Spinner = ({loading}) => {
  return (
    <div className=' h-full w-full min-w-full green-gradient min-h-screen m-0 mx-auto flexCenterAll'>
        <ClipLoader 
          color='#242424'
          loading={loading}
          cssOverride={override}
          size={50}
      />
    </div>

  
  )
}

export default Spinner