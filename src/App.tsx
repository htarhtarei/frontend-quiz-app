import { useEffect, useState } from "react";
import mobileLight from "./assets/images/pattern-background-mobile-light.svg";
import mobileDark from "./assets/images/pattern-background-mobile-dark.svg";
import tabletLight from "./assets/images/pattern-background-tablet-light.svg";
import tabletDark from "./assets/images/pattern-background-tablet-dark.svg";
import desktopLight from "./assets/images/pattern-background-desktop-light.svg";
import desktopDark from "./assets/images/pattern-background-desktop-dark.svg";
import { useMediaQuery } from "react-responsive";
import { usePageStore, useThemeStore } from "./store/store";
import QuizAnsweringPage from "./pages/QuizAnsweringPage";
import CompletePage from "./pages/CompletePage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const theme = useThemeStore(state=>state.theme)  
  const currentPage = usePageStore(state=>state.currentPage)

  const [isDarkMode,setIsDarkMode] = useState<boolean>(false)

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });


  let backgroundImage =desktopLight; 
  if (isMobile) {
    backgroundImage = isDarkMode ? mobileDark : mobileLight;
  } else if (isTablet) {
    backgroundImage = isDarkMode ? tabletDark : tabletLight;
  } else if (isDesktop) {
    backgroundImage = isDarkMode ? desktopDark : desktopLight;
  }

  useEffect(()=>{
    if(localStorage.getItem("theme") === "dark"){
      setIsDarkMode(true)
    }else {
      setIsDarkMode(false)
    }
  },[theme])


  let CurrentComponent;
  switch (currentPage) {
    case "quizAnsweringPage":
      CurrentComponent = QuizAnsweringPage;
      break;
    case "completeAnswerPage":
      CurrentComponent = CompletePage;
      break;
    default:
      CurrentComponent = WelcomePage;
      break;
  }
  
  return (
    <div
      className="font-rubik bg-no-repeat min-h-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CurrentComponent/>
    </div>
  );
}

export default App;
