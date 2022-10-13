import img_home from '../../assets/home/list_img_home';

import './Navbar.css';

// COMPONENTES
import {Footer} from '../Footer/Footer';
import { useState } from 'react';


const Navbar = (props) => {

    // Estado del boto
   const [page, setPage] = useState(1);

    const activeButton = (pageIndex) => {
        setPage(pageIndex);
    }

    return(
        <section className='navbar'>
            <div>
                <div className='profile-box'>
                    <div className='profile-picture-box'> <img src={img_home[1].img} alt={img_home[1].alt}></img></div>
                    <p>JOSSUE FUENTES</p>
                </div>

                <nav className='nav-box'>
                    <ul className='nav'>
                        <li 
                        className={page === 1 ? "active-btn" : null}
                        onClick={()=> activeButton(1)}
                        >Home</li>

                        <li className='menu-subtitle'>Content</li>

                        {/* <li
                        className={page === 2 ? "active-btn" : null}
                        onClick={()=> activeButton(2)}
                        >Certificates</li> */}
                        
{/*                         <li
                        className={page === 3 ? "active-btn" : null}
                        onClick={()=> activeButton(3)}
                        >Stack</li>

                        <li
                        className={page === 4 ? "active-btn" : null}
                        onClick={()=> activeButton(4)}
                        >Portfolio</li> */}
                    </ul>
                </nav>
            </div>

            <Footer />
        </section>
    );
};

export {Navbar};