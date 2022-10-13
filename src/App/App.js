import {Navbar} from '../components/Menu/Navbar';
import {Home} from '../components/Home/Home';
import {Certificate} from '../components/Certificate/Certificate';

// hola de estilos
import './App.css'

function App() {

  return (
    <div className='body'>
      <Navbar pagina={1}/>

      <div className='section-container'>
      <Home/>
      <Certificate />
      </div>

    </div>
  );

}

export default App;
