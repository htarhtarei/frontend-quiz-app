import Navbar from '../components/Welcome/Navbar';
import TagBox from '../components/Welcome/TagBox';

const WelcomePage = () => {
    return (
        <main className='flex items-center h-screen'>
            <div>
                <Navbar tag='CSS'/>

                <div className='grid grid-cols-12 md:gap-10 lg:gap-24 pt-28 px-8 md:px-20 lg:px-52'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-7'>
                        <div className='text-[36px] lg:text-[52px] leading-[40px] lg:leading-[54px] dark:text-white'>
                            <h1>Welcome To The</h1>
                            <h1 className='font-bold'>Frontend Quiz!</h1>
                        </div>
                        <p className='text-[.8rem] py-5 lg:py-10 italic text-slate-500'>Pick a subject to get started</p>
                    </div>
                    
                    <TagBox/>
                </div>
            </div>
        </main>
    );
};

export default WelcomePage;
