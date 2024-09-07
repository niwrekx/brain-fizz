import React from 'react'

const Copyright = () => {

    const year = new Date().getFullYear()
    return (
        <div className='block text-center text-sm md:text-base min-h-10'>
            <p className='text-green-900'>Copyright © niwrekx {year}, All Rights Reserved.</p>
        </div>
    )
}

export default Copyright