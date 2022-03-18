import { useAppDispatch, useAppSelector } from '../ts-utils/hooks';
import { addPoints, showReviewPage, clickedButton } from '../redux/slices/counterSlice';
import { addLink } from '../redux/slices/startSlice';
import { Exit } from '../components/index'

export const Active = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector((state) => state.load.questions);
    const { progression } = useAppSelector((state) => state.counter);

    const clickedOnBox = (bool: boolean, i:number) => {
        if (bool) {
            dispatch(addPoints());
        } else {
            dispatch(addLink(questions.questions[progression].link))
        }
        dispatch(clickedButton(i))
        dispatch(showReviewPage());
    }

    return (
        <>
           <section className='question'>
          <Exit />
                <p className='question__text'>{questions.questions[progression].question}</p>
                {questions.questions[progression].code && (
                   <>
                    <pre className='question__code'><code >{questions.questions[progression].code}</code></pre>
                   </>
               )}
                <section className='answer'>
                {questions.questions[progression].answers.map((answer: [string, boolean], i: number) => (
                    <>
                        <button className='answer__button' onClick={()=> clickedOnBox(answer[1], i)}>
                            <pre>
                                <code>{answer[0]}</code>
                            </pre>
                        </button>      
                    </>
                ))}
                </section>
           </section>
        </>
    )
}