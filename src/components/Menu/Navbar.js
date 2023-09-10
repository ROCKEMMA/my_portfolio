import img_home from '../../assets/home/list_img_home';
import img_ico from '../../assets/ico/list_img_ico';
import './Navbar.css';
import './MobileNavbar.css';

// COMPONENTES
import {Footer} from '../Footer/Footer';
import { useState } from 'react';

const Navbar = (props) => {

    // estado del boton
    const [navBar,setNavBar] = useState(false);
    const activeNav = ()=>{
        setNavBar(!navBar);
    }

    return(
        <section className='navbar'>
            <div>
                <div className='profile-box'>
                    <div className='profile-picture-box'>
                        <img className='logo-desktop' src={img_home[1].img} alt={img_home[1].alt}/>
                        <img 
                        className={`ico-menu ${navBar ? 'inactive-nav-bar' : 'active-nav-bar'}`}
                        src={img_ico[10].img} 
                        alt={img_ico[10].alt}
                        onClick={activeNav}
                        />
                        <img 
                        className={`ico-closed ${navBar ? 'active-nav-bar' : 'inactive-nav-bar'}`}
                        src={img_ico[11].img} 
                        alt={img_ico[11].alt}
                        onClick={activeNav}
                        />

                        
                    </div>
                    <p>JOSSUE FUENTES</p>
                </div>

                <nav className={`nav-box ${navBar ? 'active-nav-bar': null}`}>
                    <ul className='nav'>
                        <li 
                        className={`li ${props.page === 1 ? "active-btn" : null}`}
                        onClick={()=> {
                            props.setPage(1);
                            activeNav();
                        }}
                        >Home</li>

                        <li className='li menu-subtitle'>Content</li>

                        <li
                        className={`li ${props.page === 2 ? "active-btn" : null}`}
                        onClick={()=> {
                            props.setPage(2);
                            activeNav(); 
                        }}
                        >Certificates</li>
                        
                        <li
                        className={`li ${props.page === 3 ? "active-btn" : null}`}
                        onClick={()=> {
                            props.setPage(3);
                            activeNav();
                        }}
                        >Stacks</li>

                        <li
                        className={`li ${props.page ===4 ? "active-btn" : null}`}
                        onClick={()=> {
                            props.setPage(4);
                            activeNav();
                        }}
                        >Portfolio</li>

                        <li
                        className={`li ${props.page ===5 ? "active-btn" : null}`}
                        onClick={()=> {
                            props.setPage(5);
                            activeNav();
                        }}
                        >Contactar</li>
                    </ul>
                </nav>
            </div>

            <Footer />
        </section>
    );
};

export {Navbar};