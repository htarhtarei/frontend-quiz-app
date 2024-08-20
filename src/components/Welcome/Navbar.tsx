import { dynamicIconBg, dynamicTagIcon } from "../../store/dynamic";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props{
  tag:string
}

const Navbar = ({tag}:Props) => {
  const icon = dynamicTagIcon(tag)

  return (
    <nav className="flex justify-between items-center w-screen pt-12 px-5 md:px-12 lg:px-40">
      <div className="flex items-center space-x-3">
        <div className={`size-8 ${dynamicIconBg(tag)} px-1 pt-1 rounded-md`}>
            <img className='w-full h-full' src={icon} alt={`${tag} Icon`} />
        </div>
        <p className='font-semibold dark:text-white'>{tag}</p>
      </div> 

      <ThemeSwitcher />    
    </nav>
  );
};

export default Navbar;
