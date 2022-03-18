import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { Start } from '../../ts-utils/interfaces'


const initialState = { start: false, results: false, links: []} as Start;

export const start = createSlice( { 
      name:'start', 
      initialState,
      reducers: {
        hasStarted: (state: Start, action: PayloadAction<boolean>) => {
            state.start = action.payload  
        },
        quizFinished: (state: Start, action: PayloadAction<boolean>) => {
          state.results = action.payload
        },
        addLink: (state: Start, action: PayloadAction<string>) => {
          state.links.push(action.payload);
        },
        removeLinks: (state: Start, action: PayloadAction<string[]>) => {
          state.links = action.payload;
        }
      }, 
  }); 
  
  export const { hasStarted, quizFinished, addLink, removeLinks } = start.actions;
  export default start.reducer;