import Navbar from './components/menu/Navbar';
import Home from './components/home/Home';

// hola de estilos
import './App.css'

function App() {

  return (
    <div className='body'>
      <Navbar />
      <div className='section-container'>
        <Home />
      </div>
    </div>
  );

}

export default App;
