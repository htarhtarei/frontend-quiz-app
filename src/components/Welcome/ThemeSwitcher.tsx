import { useEffect, useState } from 'react'
import { useThemeStore } from '../../store/store'
import lightSunIcon from "../../assets/images/icon-sun-light.svg";
import darkSunIcon from "../../assets/images/icon-sun-dark.svg";
import lightMoonIcon from "../../assets/images/icon-moon-light.svg";
import darkMoonIcon from "../../assets/images/icon-moon-dark.svg";

const ThemeSwitcher = () => {
  
    const [sunIcon, setSunIcon] = useState(lightSunIcon);
    const [moonIcon, setMoonIcon] = useState(lightMoonIcon);
    
    const theme = useThemeStore(state=>state.theme)
    const updateTheme = useThemeStore(state => state.setTheme)
    const [dark, setDark] = useState(localStorage.getItem("theme") === "dark" ? true : false)

    useEffect(() => {
      if (theme === "dark") {
        setSunIcon(lightSunIcon);
        setMoonIcon(lightMoonIcon);
      } else {
        setSunIcon(darkSunIcon);
        setMoonIcon(darkMoonIcon);
      }
    }, [theme]);    

    const changeHandler = () => {
      setDark(!dark);
    }

    useEffect(()=>{
      localStorage.setItem("theme", dark ? "dark" : "light" );
      updateTheme(dark ? "dark" : "light")  
    },[dark,theme])
    
    useEffect(() => {
      const modeBtn = document.querySelector("#toggleB");
      
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        modeBtn?.setAttribute("checked", "checked");
      } else {
        document.body.classList.remove("dark");
      }
    }, [theme])
    
    return (
      <div className="flex items-center space-x-1">
        <img className="size-5" src={sunIcon} alt="Light Icon" />
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              onClick={changeHandler}
              type="checkbox"
              id="toggleB"
              className="sr-only"
            />
            <div className="block bg-purple-500 w-8 h-5 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
          </div>
        </label>
        <img className="size-5" src={moonIcon} alt="Dark Icon" />
      </div>
    );
  }

export default ThemeSwitcher
