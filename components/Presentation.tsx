import { MainSvg } from './MainSvg';
import 'animate.css';

export const Presentation = () => {
    return ( 
        <section className='sections presentation' id='index'>
            <section className='title animate__animated animate__fadeInLeft'    >
                <h2>Hola👋, Soy Jonathan</h2>
                <h2>
                    <span>{'<>'}</span> 
                    Desarrollador web full stack 
                    <span>{'</>'}</span>
                </h2>
            </section>

            <MainSvg />
        </section>
    )
};
