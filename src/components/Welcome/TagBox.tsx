import { DUMMY_DATA } from '../../data';
import { usePageStore, useQuizStore } from '../../store/store';
import { dynamicIconBg } from '../../store/dynamic';

const TagBox = () => {
    const tags = DUMMY_DATA[0].tags;

    const getSelectedTag = useQuizStore(state=>state.setSelectedQuizTag)
    const getSelectedCurrentPage = usePageStore(state=>state.setCurrentPage)
    
    
    const tagClickHandler = (value:string)=>{
        getSelectedTag(value)
        getSelectedCurrentPage("quizAnsweringPage")
    }

    return (
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
    )
}

export default TagBox
