import { useState } from 'react';
import ProgressBar from '../components/QuizAnswering/ProgressBar';
import QuizNavbar from '../components/QuizAnswering/QuizNavbar';
import { DUMMY_DATA } from '../data';
import { dynamicAbcdTag } from '../store/dynamic';
import { usePageStore, useQuizStore } from '../store/store';

const QuizAnsweringPage = () => {
  const [isSubmit , setIsSubmit] = useState<boolean>(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const {currentRound,setCurrentRound,selectedQuizTag,setUserScore} = useQuizStore((state) => state);
  const userScore = useQuizStore(state=>state.userScore)
  const setCurrentPage = usePageStore(state=>state.setCurrentPage)

  const datas = DUMMY_DATA[0].quizzes;
  const selectedTagDatas = datas.find((data) => data.title === selectedQuizTag);
  const questions = selectedTagDatas?.questions;
  const currentQuestion = questions?.length !== undefined ? questions[currentRound] : null;
  

  const maxRound = questions?.length || 10;

  const dynamicOptionBgClass = (option: string) => {
    if (selectedAnswer === option && !isSubmit) {
      return 'bg-purple-500'; 
    }
    return 'bg-[#FFFFFF] dark:bg-[#3B4D66]'; 
  };

  const dynamicOptionBorderCorrectOrWrong = (option:string)=>{
    if(isSubmit){
      if(selectedAnswer === option){
        return selectedAnswer === currentQuestion?.answer ? "border border-green-500" : "border border-red-500"
      }else{
        return option === currentQuestion?.answer ? "border border-green-500" : null;
      }
    }
  }
  
  const submitHandler =()=>{
    if(selectedAnswer.length !== 0){
      selectedAnswer === currentQuestion?.answer ? setUserScore(userScore + 1) :setUserScore(userScore)
      setIsSubmit(true)

    }else {
      return null
    }
  }

  const nextHandler = ()=>{
    currentRound < 9 ? setCurrentPage("quizAnsweringPage") : setCurrentPage("completeAnswerPage")

    setIsSubmit(false)
    setCurrentRound(currentRound + 1)
    setSelectedAnswer("")
  }

  return (
    <div className="">
      <QuizNavbar />
      <div className="pt-10 px-8 md:px-12 lg:px-48">
        <p className="text-[.9rem] pb-3 italic text-slate-500">
          Question {currentRound+1} out of {maxRound}
        </p>
        <h5 className="py-4 dark:text-white">{currentQuestion?.question}</h5>

        <ProgressBar value={currentRound + 1} max={maxRound} />

        <div className="pt-10">
          <ul className="grid grid-cols-12 gap-4 cursor-pointer">
            {currentQuestion?.options.map((option, index) => {
              return (
                <li
                  onClick={() => setSelectedAnswer(option)}
                  key={index}
                  className={`flex col-span-12 md:col-span-6 space-x-4 ${dynamicOptionBgClass(option)} ${dynamicOptionBorderCorrectOrWrong(option)} shadow-md p-3 rounded-lg transition-colors duration-150`}
                >
                  <h1 className="bg-[#F4F6FA] dark:bg-[#43556e] dark:text-white text-slate-500 px-[10px] pt-1 rounded-md size-8">
                    {dynamicAbcdTag(index)}
                  </h1>
                  <p className="text-center dark:text-white">{option}</p>
                </li>
              );
            })}
          </ul>
          {isSubmit ?
            <button onClick={nextHandler} className="w-full md:w-[120px] bg-purple-700 text-white py-2 rounded-lg my-10">
              Next Question
            </button>
           :<button onClick={submitHandler} className="w-full md:w-[120px] bg-purple-700 text-white py-2 rounded-lg my-10">
              Submit
          </button>}
        </div>
      </div>
    </div>
  );
};

export default QuizAnsweringPage;
