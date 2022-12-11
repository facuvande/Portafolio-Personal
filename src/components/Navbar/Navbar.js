import './Navbar.css'

const Navbar = () =>{

    return(
        <header className="Header">
            <nav className="Navbar">
                <p>./</p>
                <ul>
                    <a href><li>Sobre Mi</li></a>
                    <a href="#habilidades"><li>Habilidades</li></a>
                    <a href="#proyectos"><li>Proyectos</li></a>
                </ul>
            </nav>
            <div className="circuloContainer">
                <div className="circulo first"></div>
                <div className="circulo second"></div>
                <div className="circulo third"></div>
            </div>
        </header>
    )

}

export default Navbar