import {useState} from 'react';

import {Navbar} from '../components/Menu/Navbar';
import {Home} from '../components/Home/Home';
import {Certificate} from '../components/Certificate/Certificate';
import {Stacks} from '../components/Stacks/Stacks';

// hola de estilos
import './App.css'

function App() {

      // Estado para la vegación
      const [page, setPage] = useState(1);

  return (

    <div className='body'>
      <Navbar 
      page={page}
      setPage={setPage}
      />

      <div className='section-container'>
        <Home page={page} />
        <Certificate page={page} />
        <Stacks page={page}/>
      </div>

    </div>
  );

}

export default App;
