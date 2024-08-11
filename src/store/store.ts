import { create } from "zustand";

interface ThemeState {
   theme : string
   setTheme : (value:string)=> void
}

interface PageState {
   currentPage : string
   setCurrentPage : (value:string)=> void
}

interface QuizState {
   selectedQuizTag:string
   setSelectedQuizTag : (value:string)=> void
   currentRound:number
   setCurrentRound:(value:number)=>void
   userScore:number
   setUserScore:(value:number) => void
}

export const useThemeStore =  create<ThemeState>()((set) => ({
  theme: "light",
  setTheme: (value) => set(() => ({ theme: value })),
}))

export const usePageStore =  create<PageState>()((set) => ({
  currentPage: "welcomePage",
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
}))

export const useQuizStore = create<QuizState>()((set)=>({
  selectedQuizTag:"CSS",
  setSelectedQuizTag:(value)=>set(()=>({selectedQuizTag:value})),
  currentRound:0,
  setCurrentRound:(value)=>set(()=>({currentRound:value})),
  userScore: 0,
  setUserScore:(value)=>set(()=>({userScore:value}))
}))