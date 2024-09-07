import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Categories from '../components/Quiz/Categories';
import { FaArrowRightLong } from "react-icons/fa6";
import { quizLink } from '../constants';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  const{name,difficulty,amount} = location.state || {};

  const handleCategorySubmit = (e) =>{
    e.preventDefault();
    try{
      navigate(quizLink, {state:{name,difficulty,category,amount}});
      // console.log(name,difficulty,category);
    }catch(error){
      console.error(error.message);
    }

  }

  return (
    
      <section className='generalContainer  min-w-full green-gradient relative '>
        <div className='flexCenterAllColumn min-h-screen generalpadding  '>
          <div className='flexCenterAllColumn pb-5'>
            <h2 className='sub-title'>Hello, {name}👋</h2>
            <p className='text-md md:text-xl text-center'>Choose any category from the items below.</p>
          </div>

          <div className='  '>
            <Categories setCategory={setCategory}/>
          </div>

          <div className='fixed bottom-5 right-5'>
          <button onClick={handleCategorySubmit} className=' flexCenterAll gap-1 bg-slate-900 text-slate-50 rounded-md p-2 text-md md:text-xl arrow-nav'>
            Next <FaArrowRightLong /> 
          </button>    
        </div>  
        </div>  
 
      </section>
  )
}

export default CategoryPage