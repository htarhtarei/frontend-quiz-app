import Navbar from '../components/Welcome/Navbar';
import { DUMMY_DATA } from '../data';
import { dynamicIconBg } from '../store/dynamic';
import { usePageStore, useQuizStore } from '../store/store';

const WelcomePage = () => {
    const tags = DUMMY_DATA[0].tags;

    const getSelectedTag = useQuizStore(state=>state.setSelectedQuizTag)
    const getSelectedCurrentPage = usePageStore(state=>state.setCurrentPage)


    const tagClickHandler = (value:string)=>{
        getSelectedTag(value)
        getSelectedCurrentPage("quizAnsweringPage")
    }

    return (
        <main className='flex items-center h-screen'>
            <div>
                <Navbar />

                <div className='grid grid-cols-12 md:gap-10 lg:gap-24 pt-28 px-8 md:px-20 lg:px-52'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-7'>
                        <div className='text-[36px] lg:text-[52px] leading-[40px] lg:leading-[54px] dark:text-white'>
                            <h1>Welcome To The</h1>
                            <h1 className='font-bold'>Frontend Quiz!</h1>
                        </div>
                        <p className='text-[.8rem] py-5 lg:py-10 italic text-slate-500'>Pick a subject to get started</p>
                    </div>
                    <ul className='mt-10 md:mt-0 col-span-12 md:col-span-6 lg:col-span-5 cursor-pointer'>
                        {
                            tags.map((tag) => (
                                <li
                                    key={tag.id}
                                    onClick={()=>{tagClickHandler(tag.tagName)}}
                                    className='flex items-center space-x-8 bg-[#FFFFFF] dark:bg-[#3B4D66] w-[310px] md:w-full shadow-md p-3 my-3 rounded-lg'
                                >
                                    <div className={`size-8 ${dynamicIconBg(tag.tagName)} px-1 pt-1 rounded-md`}>
                                        <img className='w-full h-full' src={tag.icon} alt={`${tag.tagName} Icon`} />
                                    </div>
                                    <p className='font-semibold dark:text-white'>{tag.tagName}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default WelcomePage;
