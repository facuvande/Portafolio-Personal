import Typed from "typed.js"
import { useEffect, useRef } from 'react'

const Skills = () =>{

    const el = useRef(null)
    
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Proyectos"],
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
        <section className="ProyectosContainer">
        <h2 className="subtitle"><span className="HabilidadesColor">./</span><span ref={el}></span></h2>
        
    </section>
    )
}

export default Skills