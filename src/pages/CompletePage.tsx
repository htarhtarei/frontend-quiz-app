import { usePageStore, useQuizStore } from '../store/store';
import { dynamicIconBg, dynamicTagIcon } from '../store/dynamic';
import Navbar from '../components/Welcome/Navbar';

const CompletePage = () => {
  const userScore = useQuizStore(state=>state.userScore)
  const setCurrentPage = usePageStore(state=>state.setCurrentPage)
  const {setUserScore,selectedQuizTag,setCurrentRound} = useQuizStore(state=>state)

  const icon = dynamicTagIcon(selectedQuizTag)

  const clickHandler = ()=>{
    setUserScore(0)
    setCurrentPage("")
    setCurrentRound(0)
  }
  
  return (
    <div>
      <Navbar tag={selectedQuizTag}/>

      <div className="grid grid-cols-12 md:gap-10 pt-10 lg:pt-28 px-6 md:px-20 lg:px-52">
        <div className='col-span-12 md:col-span-5 lg:col-span-6'>
            <div className='text-[36px] lg:text-[52px] leading-[40px] lg:leading-[50px] dark:text-white pt-0 lg:pt-16'>
                <h1 className='text-[32px] lg:text-[54px]'>Quiz Complete</h1>
                <h4 className='text-[32px] font-bold lg:text-slate-600 dark:lg:text-white'>Your scored <span></span></h4>
            </div>
            <button onClick={clickHandler} className='hidden md:block md:w-[120px] bg-purple-700 text-white py-2 rounded-lg my-10'>Play Again</button>
        </div>


        <div className='mt-10 md:mt-0 col-span-12 md:col-span-6 lg:col-span-5'>
            <div className='bg-[#EDF1F9] dark:bg-[#313E51] shadow-lg w-[320px] md:w-[400px] lg:w-[500px] py-10 md:py-24 rounded-md'>
                <div className="flex justify-center items-center space-x-3">
                    <div className={`size-8 ${dynamicIconBg(selectedQuizTag)} px-1 pt-1 rounded-md`}>
                      <img src={icon} alt={`${selectedQuizTag} Icon`} />
                    </div>
                    <span className="text-[20px] font-bold dark:text-white py-4">{selectedQuizTag}</span>
                </div>
                <h1 className='text-[54px] font-bold text-center dark:text-white'>{userScore}</h1>
                <p className='text-center text-slate-500'>out of 10</p>
            </div>

            <button onClick={clickHandler} className='w-full md:hidden bg-purple-700 text-white py-2 rounded-lg my-10'>Play Again</button>

        </div>

      </div>
    </div>
  )
}

export default CompletePage
