import { MainSvg } from './MainSvg';
import 'animate.css';

export const Presentation = () => {
    return ( 
        <section className='presentation'>
            <section className='title animate__animated animate__fadeInLeft'>
                <h2>Hola👋, Soy Jonathan</h2>
                <h2>{`<>Desarrollador web full stack</>`}</h2>
            </section>

            <MainSvg></MainSvg>
        </section>
    )
};
