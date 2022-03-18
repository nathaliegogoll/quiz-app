import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { Counter } from '../../ts-utils/interfaces'


const initialState = { progression: 0, correctAnswers: 0, activeQuestion: true, clicked: 0, quiz: '' } as Counter;

export const counter = createSlice( { 
      name:'start', 
      initialState,
      reducers: {
        nextQuestion: (state: Counter) => {
            state.progression += 1;
            state.activeQuestion = true;
        },
        addPoints: (state: Counter) => {state.correctAnswers += 1},
        showReviewPage: (state: Counter) => {state.activeQuestion = false},
        exitPage: (state: Counter) => {
            state.progression = 0;
            state.correctAnswers = 0;
            state.activeQuestion = true;
        },
        clickedButton: (state: Counter, action: PayloadAction<number>) => {state.clicked = action.payload},
        chooseYourAdventure: (state: Counter, action: PayloadAction<string>) => {state.quiz = action.payload},
      }, 
  }); 
  
  export const { nextQuestion, addPoints, showReviewPage, exitPage, clickedButton, chooseYourAdventure } = counter.actions;
  export default counter.reducer;