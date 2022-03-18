import { useAppDispatch, useAppSelector } from '../ts-utils/hooks';
import { nextQuestion } from '../redux/slices/counterSlice';
import { Exit } from '../components/index'
import { quizFinished } from '../redux/slices/startSlice';

export const Inactive = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector((state) => state.load.questions);
    const { progression, clicked } = useAppSelector((state) => state.counter);

    const checkCorrect = (bool: boolean, i: number) => {
        if (i === clicked ) {
            if (bool) {
                return "answer__button correct";
            }
            return "answer__button not--correct";
        }
        return "answer__button"
    }

    return (
        <>
           <section className='question'>
            <Exit />
               <p className='question__text'>{questions.questions[progression].question}</p>
               {questions.questions[progression].code && (
                   <>
                    <pre className='question__code'><code>{questions.questions[progression].code}</code></pre>
                   </>
               )}
           <section className='answer'>
           {questions.questions[progression].answers.map((answer: [string, boolean], i: number) => (
               <>
                        <button className={checkCorrect(answer[1], i)} onClick={(e)=> e.preventDefault()} >
                            <pre>
                                <code>{answer[0]}</code>
                            </pre>
                        </button>      
                    </>
                ))}
           </section>
           <section className='progress'>
           {(progression < 6) && (
               <>
               <button className='progress__button' onClick={() => dispatch(nextQuestion())}>Next</button>
               <p className='progress__text'>Question {progression + 1} out of 7</p>
               </>
           )}
           {(progression === 6) && (
               <>
               <button className='progress__button' onClick={() => dispatch(quizFinished(true))}>Finish quiz</button>
               <p className='progress__text'>Question {progression + 1} out of 7</p>
               </>
           )}
           </section>
           </section>
        </>
    )
}