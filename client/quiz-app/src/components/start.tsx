import { useAppDispatch } from '../ts-utils/hooks';
import { hasStarted } from '../redux/slices/startSlice';
import { chooseYourAdventure } from '../redux/slices/counterSlice';

export const Start = () => {
    const dispatch = useAppDispatch();

    const startGame = (value: string) => {
        dispatch(hasStarted(true))
        dispatch(chooseYourAdventure(value));
    }
    return (
        <>
        <section className="startpage">
            <section className='startpage__information'>
            <h1 className="startpage__title">Welcome!</h1>
            <h3 className="startpage__description">This application is designed to help you test your skills before attempting a LinkedIn skill assesment.</h3>
            </section>
            <h3 className="startpage__choice">Please choose your topic below:</h3>
            <section className='startpage__buttoncontainer'>
                <button className="startpage__button yellow" onClick={() => startGame('javascript')}>Javascript</button>
                <button className="startpage__button red" onClick={() => startGame('csharp')}>C#</button>
                <button className="startpage__button green" onClick={() => startGame('react')}>React</button>
            </section>
        </section>
            <footer className='footer__container'>
            <span className="footer">
            <a className='footer__link' href="https://www.linkedin.com/in/nathalie-jacobsson-gogoll-067b20120/" target="_blank">LinkedIn</a>
            <p className='footer__text'>|</p>
            <a className='footer__link' href="https://github.com/nathaliegogoll" target="_blank">Github</a>
            </span>
            </footer>
        </>
    )
}