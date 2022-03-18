import { useAppDispatch } from '../ts-utils/hooks';
import { exitPage } from '../redux/slices/counterSlice';
import { clearQuestions } from '../redux/slices/questionSlice';
import { hasStarted, quizFinished, removeLinks } from '../redux/slices/startSlice';


export const Exit = () => {
    const dispatch = useAppDispatch();

    const endGame = () => {
        dispatch(hasStarted(false));
        dispatch(exitPage());
        dispatch(clearQuestions());
        dispatch(quizFinished(false));
        dispatch(removeLinks([]));
    }

    return (
        <>
        <button className="exit" onClick={() => endGame()}>X</button>
        </>
    )
}