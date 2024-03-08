// Archivos de estilos
import './App.css'
import './MobileApp.css';
import { Navbar } from '../components/Menu/Navbar';
import { Header } from '../components/Header/Header';
import { Destacados } from '../components/Destacados/Destacados';

function App() {

  return (
    <div className='body'>
      <Header/>
      <Navbar/>
      <Destacados/>
    </div>
  );

}

export default App;
