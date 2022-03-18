import { useAppSelector } from '../ts-utils/hooks';
import { Exit } from '../components/index'



export const Results = () => {
    const { correctAnswers } = useAppSelector((state) => state.counter);
    const { links } = useAppSelector((state) => state.start);

    const getClass = (i:number) => {
        const colour = ['red', 'yellow', 'green'];
        return `resultspage__link ${colour[(i % 3)]}`
    }

    return (
        <>
        <section className="resultspage">
            <Exit />
            {correctAnswers > 4 && <h1 className="resultspage__title">Fantastic!</h1>}
            {(correctAnswers >= 2 && correctAnswers <= 4) && <h1 className="resultspage__title">Nice start!</h1>}
            {correctAnswers < 2 && <h1 className="resultspage__title">Keep practicing...</h1>}
            <p className="resultspage__correct">{correctAnswers} out of 7 correct</p>
            {links.map((link: string, i:number) => (
                <>
                <section className={getClass(i)}>
                    <a className="resultspage__linktext" target="_blank" href={link}>More info</a>
                </section>
                </>
            ))}
        </section>
        </>)
}