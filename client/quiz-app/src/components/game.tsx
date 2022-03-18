import { useAppDispatch, useAppSelector } from '../ts-utils/hooks';
import { useEffect } from 'react';
import { hasStarted } from '../redux/slices/startSlice';
import { fetchQuestions, clearQuestions } from '../redux/slices/questionSlice';
import { exitPage } from '../redux/slices/counterSlice';
import { Active, Inactive } from './index'


export const Game = () => {
    const dispatch = useAppDispatch();
    const { activeQuestion, quiz } = useAppSelector((state) => state.counter);
    const questions = useAppSelector((state) => state.load.questions);

    const endGame = () => {
        dispatch(hasStarted(false))
        dispatch(exitPage())
        dispatch(clearQuestions());
    }

    useEffect(() => {
        dispatch(fetchQuestions(quiz))
    }, [])

    return (
        <>
            {questions.questions.length > 0 && (
                <>
                { activeQuestion ? <Active />: <Inactive /> }
                </>
            )}
        </>)
}