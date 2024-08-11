import CSSICON from "../../assets/images/icon-css.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  
  return (
    <nav className="flex justify-between w-screen px-5 md:px-12 lg:px-40">
      <div className="flex items-center space-x-3">
        <div className="bg-green-200 size-8 px-1 pt-1 rounded-md">
          <img src={CSSICON} alt="CSS Icon" />
        </div>
        <span className="text-[20px] font-bold dark:text-white">CSS</span>
      </div>

      <ThemeSwitcher />
    
    </nav>
  );
};

export default Navbar;
