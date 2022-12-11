import './Habilidades.css'
import Typed from "typed.js"
import { useEffect, useRef } from 'react'

const Habilidades = () =>{

    const el = useRef(null)
    
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Habilidades"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });
    
        // Destropying
        return () => {
            typed.destroy();
            };
        }, []);

    return (
        <section className="HabilidadesContainer" id="habilidades">
            <h2 className='subtitle'><span className="HabilidadesColor">./</span><span ref={el}></span></h2>
            <h3>Frontend</h3>
            <div className="line"></div>
            <div className="Habilidad1">
                <div className="HabilidadJs">
                    <ion-icon name="logo-javascript"></ion-icon>
                    <p>Javascript</p>
                </div>
                <div className="HabilidadReact">
                    <ion-icon name="logo-react"></ion-icon>
                    <p>React</p>
                </div>
                <div className="HabilidadHtml">
                    <ion-icon name="logo-html5"></ion-icon>
                    <p>Html</p>
                </div>
                <div className="HabilidadCss">
                    <ion-icon name="logo-css3"></ion-icon>
                    <p>Css</p>
                </div>
                <div className="HabilidadSass">
                    <ion-icon name="logo-sass"></ion-icon>
                    <p>Sass</p>
                </div>
                <div className="HabilidadBootstrap">
                    <ion-icon name="help"></ion-icon>
                    <p>Bootstrap</p>
                </div>
            </div>
            <h3>Backend</h3>
            <div className="line"></div>
            <div className="Habilidad1">
                <div className="HabilidadNode">
                    <ion-icon name="logo-nodejs"></ion-icon>
                    <p>NodeJS</p>
                </div>
            </div>
            <h3>Desarrollo y Trabajo</h3>
            <div className="line"></div>
            <div className="Habilidad1">
                <div className="HabilidadGit">
                    <ion-icon name="logo-github"></ion-icon>
                    <p>Github</p>
                </div>
            </div>
        </section>
    )
}

export default Habilidades