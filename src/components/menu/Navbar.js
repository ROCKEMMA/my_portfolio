import './Navbar.css';
import img_home from '../../assets/home/list_img_home';

// COMPONENTES
import Footer from '../footer/Footer';

const Navbar = () => {
    return(
        <section className='navbar'>
            <div>
                <div className='profile-box'>
                    <div className='profile-picture-box'> <img src={img_home[1].img} alt={img_home[1].alt}></img></div>
                    <p>JOSSUE FUENTES</p>
                </div>

                <nav className='nav-box'>
                    <ul className='nav'>
                        <li className='active-btn'>Home</li>
                        <li className='menu-subtitle'>Content</li>
                        <li>Articles</li>
                        <li>Portfolio</li>
                        <li>Stack</li>
                    </ul>
                </nav>
            </div>

            <Footer />
        </section>
    );
};

export default Navbar;