import img_ico from '../../assets/ico/list_img_ico';
import './Footer.css';

// COMPONENTE LI
const Icono = ({image_index}, {url}) => {
    return(
        <li>
            <a href={url}>
                <img src={img_ico[image_index].img} alt={img_ico[image_index].alt}/>
            </a>
        </li>
    );
}


const Footer = () =>{
    return(
        <ul className='ico_list'>
            <Icono image_index={0} url={'/'}/>
            <Icono image_index={1} url={'/'}/>
{/* ss */}
            <Icono image_index={3} url={'/'}/>
            <Icono image_index={4} url={'/'}/>
            <Icono image_index={5} url={'/'}/>
        </ul>
    );
}

export default Footer;