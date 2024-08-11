import htmlIcon from "../assets/images/icon-html.svg"
import cssIcon from "../assets/images/icon-css.svg"
import jsIcon from "../assets/images/icon-js.svg"
import accesslIcon from "../assets/images/icon-accessibility.svg"

export const dynamicIconBg = (name: string) => {
    switch (name) {
        case 'HTML':
            return "bg-orange-100";
        case 'CSS':
            return "bg-green-100";
        case 'Javascript':
            return "bg-blue-100";
        default:
            return "bg-purple-100";
    }
};

export const dynamicAbcdTag = (value:number)=>{
    switch (value) {
        case 1:
          return "B"
          break;
        case 2:
          return "C"
          break;
        case 3:
          return "D"
          break;
        default:return "A"
          break;
      }
}

export const dynamicTagIcon = (value:string)=>{
  switch (value) {
    case "CSS":
        return cssIcon
      break;
    case "JavaScript":
        return jsIcon
      break;
    case "Accessibility":
        return accesslIcon
      break;
    default: return htmlIcon
      break;
  }
}