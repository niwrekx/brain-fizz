import React, { useState } from 'react'
import { categoryOptions } from '../../constants/categories'


const Categories = ({setCategory}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (value) => {        
        setSelectedCategory(value);
        setCategory(value);//pass the value
    }

    return (
        <>
            <div className='grid md:grid-cols-5 grid-cols-3 gap-3 '>
                {categoryOptions.map ((item,index) => (
                    <div 
                        key={index} 
                        onClick={() => handleCategorySelect(item.value)}
                        className={`rounded-md p-4 flexCenterStartCol gap-1 transition-all 
                        hover:bg-teal-400 cursor-pointer ${selectedCategory === item.value ? 'bg-teal-400' : ''}`}
                    >
                        <item.icon className='text-2xl'/>
                        <p className='text-xs  text-center'>{item.label} </p>
                    </div>
                ))}  
            </div>

           
        </>
    )
}

export default Categories