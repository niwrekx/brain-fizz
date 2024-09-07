import React, { useEffect, useState,useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getQuestions } from '../services/getQuestions';
import { decode } from 'html-entities';
import Spinner from '../components/Spinner/Spinner'

import { FiChevronRight,FiChevronLeft  } from "react-icons/fi";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, Navigation , EffectFade } from "swiper/modules";
import { resultsLink, startLink } from '../constants';

const QuizPage = () => {
 
  const location = useLocation();  
  const navigate = useNavigate();
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const { name, difficulty, category, amount, questions: reviewQuestions, selectedAnswers: reviewAnswers, isReview } = location.state || {};
 
  const [questions, setQuestions] = useState(reviewQuestions || []);
  const [loading, setLoading] = useState(!reviewQuestions);

  const [sliderIndex, setSliderIndex] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState(reviewAnswers || {});

  
 
  const [score, setScore] = useState(0);
  



  useEffect(() => {
    if(!reviewQuestions){
      const fetchData = async() => {
        try{
          const data = await getQuestions(difficulty,category,amount);

          const modifiedData = data.results.map((q) =>{
            const allAnswers = [...q.incorrect_answers, q.correct_answer];
            return {
              ...q,
              shuffledAnswers: shuffleArray(allAnswers),
              correct_answer:q.correct_answer,//store correct answer
            };
          });
          setQuestions(modifiedData);
          setLoading(false);

        }catch(error){
          console.log(error.message);
          // setError(error.message);
          setLoading(false);
        }
      };
      fetchData();
    }

    
  } ,[difficulty,category,reviewQuestions])


  // shuffle questions
  const shuffleArray = (array) => {
    return array.sort((() => Math.random() - 0.5));
  }


  const handleSlideNumberChange = (swiper) => {
    setSliderIndex(swiper.activeIndex + 1);
  }


  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
    
  }

  const handleSubmitResults = () =>{    
    let newScore = 0;

    questions.forEach((question,index) => {
      if(selectedAnswers[index] === question.correct_answer){
        newScore++;
      }
    })
    setScore(newScore);
    navigate(resultsLink, {state:{name,newScore,totalQuestion:questions.length, selectedAnswers, questions}});
    
  }

  
const isLastQuestion = sliderIndex === questions.length;
const currentQuestionIndex = sliderIndex - 1; // Convert to 0-based index
const isAnswerSelected = selectedAnswers.hasOwnProperty(currentQuestionIndex);

const btnNextEventTest = () =>{
  console.log('next button pressed!');
}


if (loading) return <Spinner />


  return (
    <section className='generalContainer  min-w-full green-gradient relative '>
      <div className='flexStartBetweenColumn gap-4 min-h-screen generalpadding  '>       
        <div className='flex items-end pb-10 '>
            <p className='text-5xl font-bold text-slate-800'>{String(sliderIndex).padStart(2, '0')} </p>
            <span className='text-lg text-slate-700'>/ {questions.length}</span>
        </div>
      
        <div className='w-full'>
          <Swiper
                  className=" "
                  slidesPerView={1}    
                  spaceBetween={15}
                  modules={[Autoplay, Pagination, Navigation,EffectFade]}
                  effect="fade"
                  navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  onSlideChange={handleSlideNumberChange}
                  fadeEffect={{
                      crossFade:true,
                  }}  
                  speed={200}                  
                >
                  {questions.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='flexStartAll w-full pb-4 '>
                        <h4 className='item-title'>{decode(item.question)}</h4>
                      </div>

                      <div className='flexStartAll gap-4 w-full pb-10 '>                  
                        {item.shuffledAnswers.map((answer, answerIndex) => {
                            let id = `question-${index}-answer-${answerIndex}`;
            
                            const isSelected = selectedAnswers[index] === answer;
                            const isCorrect = answer === item.correct_answer;
                            const isIncorrect = isSelected && !isCorrect;
                            const showCorrectness = isReview && (isSelected || answer === item.correct_answer);
                        

                            return(
                              <label 
                                htmlFor={id} 
                                key={answerIndex} 
                                className={`w-full flex gap-1 transition-all border-slate-50 p-4 rounded-md border-[1px] accent-teal-800 cursor-pointer
                                  ${!isReview ? 'hover:bg-slate-100/70' : ''  }
                                  ${isSelected && !isReview ? 'bg-green-100' : 'bg-inherit' }
                                  ${isReview && isSelected ? 'bg-green-100' : ''}
                                  ${showCorrectness && isCorrect ? 'border-green-500 bg-green-200' : ''} 
                                  ${showCorrectness && isIncorrect ? 'border-red-500 bg-red-100' : ''}
                                `}
                              >
                                <input 
                                  id={id}
                                  name={`question${index}`}                            
                                  type="radio"
                                  value={answer}
                                  // checked={selectedAnswers[index] === answer}
                                  checked={isSelected}
                                  onChange={() => handleAnswerSelect(index,answer) }
                                  disabled={isReview}
                                  className=''                                  
                                />
                                <p className='text-md '>{decode(answer)}</p>
                                {showCorrectness && (
                                  <span className={`${isCorrect ? 'text-green-500' : 'text-red-500'} text-sm`}>
                                    {isCorrect ? 'Your Answer' : 'Correct Answer'}
                                  </span>
                                )}


                              
                              </label>                        
                            )
                        })}                   
                      </div>
                    </SwiperSlide>

                  ))}
          </Swiper>
        </div>
            
        <div className='md:flexCenterEnd flexCenterAll w-full gap-2'>
              <button className='arrow-nav' ref={prevRef}>
                <FiChevronLeft />Prev
              </button>
              {isReview && isLastQuestion ? (
                <a href={startLink} className='arrow-nav'>
                  Exit
                </a>
              ) : (
                <button 
                  className='arrow-nav'
                  ref={nextRef}  
                  disabled={!isAnswerSelected && !isReview}
                  onClick={!isReview && isLastQuestion ? handleSubmitResults : btnNextEventTest}      
                >
                    {isLastQuestion ?  'Submit' : 'Next' }<FiChevronRight />
                </button>
                
              )}

              
              
        </div>
      </div>
    </section>
  )
}

export default QuizPage