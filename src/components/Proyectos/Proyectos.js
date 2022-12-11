import './Proyectos.css'
import melany from './assets/portfolioMelany.jpg'
import melanyNutricion from './assets/proyectoMelanyNutricion.jpg'
import ecommerceZapatillas from './assets/proyectoEccomerceZapatillas.jpg'
import proyectoTerranova from './assets/proyectoTerranova.jpg'

const Proyectos = () =>{
    return(
        <section id="proyectos">
            <div className='proyectsContainer'>
                <div className="proyect">
                    <div className="proyectImg">
                        <img src={melany} alt="Imagen del portafolio de Melany"></img>
                    </div>
                    <div className="proyectContent">
                        <p className="fecha">5 de octubre de 2022</p>
                        <h3>Portafolio para Melany Community Manager</h3>
                        <p>Se realizo un Portafolio personal para clienta del rubro de <br></br>Community Manager.</p>
                        <h4>Tecnologias utilizadas:</h4>
                        <div className="tecnologias">
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                    </div>
                    <div className='buttons'>
                        <a href="https://facuvande.github.io/ProyectoPortafolioCliente/" target="_blank">Demo</a>
                        <a href="https://github.com/facuvande/ProyectoPortafolioCliente" target="_blank">Github</a>
                    </div>
                </div>
            </div>
            <div className='proyectsContainer'>
                <div className="proyect">
                    <div className="proyectImg">
                        <img src={melanyNutricion} alt="Imagen del portafolio de Melany"></img>
                    </div>
                    <div className="proyectContent">
                        <p className="fecha">10 de septiembre de 2022</p>
                        <h3>Sitio Web Para Melany Nutricion</h3>
                        <p>Se realizo un Sitio Web personal para clienta del rubro <br></br>Nutricion.</p>
                        <h4>Tecnologias utilizadas:</h4>
                        <div className="tecnologias">
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                    </div>
                    <div className='buttons'>
                        <a href="https://facuvande.github.io/NutricionJs/" target="_blank">Demo</a>
                        <a href="https://github.com/facuvande/NutricionJs" target="_blank">Github</a>
                    </div>
                    
                </div>
            </div>
            <div className='proyectsContainer'>
                <div className="proyect">
                    <div className="proyectImg">
                        <img src={ecommerceZapatillas} alt="Imagen del portafolio de Melany"></img>
                    </div>
                    <div className="proyectContent">
                        <p className="fecha">7 de Noviembre de 2022</p>
                        <h3>E-commerce de Zapatillas</h3>
                        <p>Se realizo un Sitio Web para practicar REACT del rubro de <br></br>Calzados.</p>
                        <h4>Tecnologias utilizadas:</h4>
                        <div className="tecnologias">
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                            <ion-icon name="logo-react"></ion-icon>
                        </div>
                    </div>
                    <div className='buttons'>
                        <a href="https://shoes-ecommerce-gilt.vercel.app/" target="_blank">Demo</a>
                        <a href="https://github.com/facuvande/shoes-ecommerce" target="_blank">Github</a>
                    </div>
                    
                </div>
                
            </div>
            <div className='proyectsContainer'>
                <div className="proyect">
                    <div className="proyectImg">
                        <img src={proyectoTerranova} alt="Imagen del portafolio de Melany"></img>
                    </div>
                    <div className="proyectContent">
                        <p className="fecha">18 de Noviembre de 2022</p>
                        <h3>Sitio Argentum Online</h3>
                        <p>Se realizo un Sitio Web para cliente de servidor <br></br>Argentum Online.</p>
                        <h4>Tecnologias utilizadas:</h4>
                        <div className="tecnologias">
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                    </div>
                    <div className='buttons'>
                        <a href="https://terranova-ao.com/" target="_blank">Demo</a>
                        <a href="https://terranova-ao.com/" target="_blank">Github</a>
                    </div>
                    
                </div>
                
            </div>
        </section>
        
    )
}

export default Proyectos