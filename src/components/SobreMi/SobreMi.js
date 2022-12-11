import './SobreMi.css'
import me from './assets/me.jpeg'

const SobreMi = () =>{
    return (
        <main className="main">
            <div className="left">
                <div className="leftContent">
                    <h1>Facundo Vandecaveye</h1>
                    <p>Desarrollador FrontEnd y Estudiante de <br></br>Ingenieria en Informatica</p>
                    <button className="HeaderSubButton">Leer mas</button>
                </div>
                <div className="leftRedes">
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
                <button className="HeaderButton">Descargar CV</button>
            </div>
            <div className="right">
                <img src={me} alt="No"></img>    
            </div> 

        </main>
    )
}

export default SobreMi