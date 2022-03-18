import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
import { Questions } from '../../ts-utils/interfaces';

export type FetchQuestions = (path: string) => Promise<any>;

export const fetchQuestions = createAsyncThunk( 
    'fetchMovies', 
    async (value:string,thunkAPI) => { 
        const data = await fetch(`http://localhost:8080/${value}`); 
        const questions = await data.json();
        return questions;
    } 
  ) 

const initialState = { questions: {questions: []}, error: false } as Questions;

export const questions = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
          clearQuestions: (state: Questions) => {state.questions.questions = []},
      }, 
      extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        })
        builder.addCase(fetchQuestions.rejected, (state) => {
        state.error = true;
        });     
      }
  }); 
  
  export const { clearQuestions } = questions.actions;
  export default questions.reducer;