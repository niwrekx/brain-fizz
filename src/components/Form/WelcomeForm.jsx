import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router';
import { categoryLink } from '../../constants';

const WelcomeForm = () => {

const [formData, setFormData] = useState({
  name:'',
  difficulty:'',
  amount:'',
})

const navigate = useNavigate();


const handleChange = (e) => {
  const {name,value} = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }))
}


const handleSubmit = (e) => {
  e.preventDefault();
  try{
    navigate(categoryLink, {state:formData});
    
  }catch(error){
    console.error(error.message);
  }
  
}

  return (
    <form onSubmit={handleSubmit} className='flexCenterAllColumn gap-3 w-full'>
      <div className='flexCenterBetween bg-slate-50/60 border-[1px] border-teal-100 rounded-md px-3 min-w-[16rem]'>
        <input
          className='form-field bg-transparent placeholder:text-neutral-500'
          type='text'
          name='name'
          id='name'
          placeholder='Enter Your Name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <CgProfile className='text-neutral-500 text-xl mr-1'/>
      </div>

      <div className='flexCenterBetween bg-slate-50/60 border-[1px] border-teal-100 rounded-md px-3 min-w-[16rem] m-0 '>
        <select
          className='form-field  bg-transparent text-neutral-500 '
          name='difficulty'
          id='difficulty'
          required
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="">Difficulty Level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        {/* <CgProfile className='text-emerald-200 text-xl mr-3'/> */}
      </div>

      <div className='flexCenterBetween bg-slate-50/60 border-[1px] border-teal-100 rounded-md px-3 min-w-[16rem]'>
        <select
            className='form-field  bg-transparent text-neutral-500 '
            name='amount'
            id='amount'
            required
            value={formData.amount}
            onChange={handleChange}
          >
            <option value="">Number of Questions</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
      </div>

      <button type='submit' className='next-btn min-w-[16rem]'>Next</button>
    </form>
  )
}

export default WelcomeForm