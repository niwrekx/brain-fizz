import React from 'react'
import PassImg from '../assets/images/passed.svg';
import FailedImg from '../assets/images/fail-mark.svg';
import { useLocation, useNavigate } from 'react-router';
import {quizLink, startLink } from '../constants';
import { Link, NavLink } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {name,newScore,totalQuestion,selectedAnswers, questions} = location.state || {};
 

  const percentageScore = ((newScore / totalQuestion) * 100).toFixed(2);
  const passingScore = percentageScore > 70;


  const handleRestartQuiz = () => {    
    navigate(startLink);
  }

  const handleReviewQuiz = () => {    
    navigate(quizLink,{state:{name,questions,selectedAnswers, isReview:true}});
   
  }

  return (
    <section className='generalContainer  min-w-full green-gradient  '>
      <div className='flexCenterAllColumn gap-4 min-h-screen generalpadding  '>
        <h2 className='sub-title'>Hi, {name}</h2>
        <p className='text-md md:text-xl text-center'>
          {passingScore ? 'Congratulations, you have passed!' : 'Sorry, you have failed!'}
        </p>
        
          <img 
            src={passingScore ? PassImg : FailedImg}
            className='w-44'
            alt="" 
          />
          <p className='text-md md:text-xl text-center'>Your score: {percentageScore}%</p>

          <div className='flex gap-2'>
            <button onClick={handleReviewQuiz} className='next-btn min-w-[13rem]'>Review Your Answers</button>
            <button 
              // to={quizLink} 
              className='cta-btn text-center min-w-[13rem]'
              onClick={handleRestartQuiz}
            >
                Restart Quiz
            </button>
          </div>
      </div>

  
    </section>

  )
}

export default ResultsPage