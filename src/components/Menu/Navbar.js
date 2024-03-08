import img_home from '../../assets/home/list_img_home';
import './Navbar.css';
import './MobileNavbar.css';

const Navbar = (props) => {
    return(
        <section className='navbar'>
            <div className='logo-box'>
                <div className='logo-box_ico-box'>
                    <img className='ico-box_logo' src={img_home[2].img} alt={img_home[1].alt}/>
                </div>
                <span>JOSSUE FUENTES</span>
            </div>
        </section>
    );
};

export {Navbar};