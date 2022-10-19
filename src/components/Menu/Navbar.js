import img_home from '../../assets/home/list_img_home';
import './Navbar.css';

// COMPONENTES
import {Footer} from '../Footer/Footer';

const Navbar = (props) => {

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
                        className={`li ${props.page === 1 ? "active-btn" : null}`}
                        onClick={()=> props.setPage(1)}
                        >Home</li>

                        <li className='li menu-subtitle'>Content</li>

                        <li
                        className={`li ${props.page === 2 ? "active-btn" : null}`}
                        onClick={()=> props.setPage(2)}
                        >Certificates</li>
                        
                        <li
                        className={`li ${props.page === 3 ? "active-btn" : null}`}
                        onClick={()=> props.setPage(3)}
                        >Stacks</li>

                        <li
                        className={`li ${props.page ===4 ? "active-btn" : null}`}
                        onClick={()=> props.setPage(4)}
                        >Portfolio</li>
                    </ul>
                </nav>
            </div>

            <Footer />
        </section>
    );
};

export {Navbar};