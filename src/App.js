import './App.css';
import Navbar from './components/Navbar/Navbar';
import SobreMi from './components/SobreMi/SobreMi';
import Habilidades from './components/Habilidades/Habilidades';
import Skills from './components/Skills/Skills';
import Proyectos from './components/Proyectos/Proyectos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SobreMi/>
      <Habilidades/>
      <Skills/>
      <Proyectos/>
      <Footer/>
    </div>
  );
}

export default App;
