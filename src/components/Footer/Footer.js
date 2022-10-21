import img_ico from '../../assets/ico/list_img_ico';
import './Footer.css';

// COMPONENTE LI
const Icono = ({image_index,url,target}) => {
    return(
        <li>
            <a href={url} target={target} rel='noreferrer'>
                <img src={img_ico[image_index].img} alt={img_ico[image_index].alt}/>
            </a>
        </li>
    );
}


const Footer = () =>{
    return(
        <ul className='ico_list'>
{/*             <Icono image_index={0} url={'/'}/>

            <Icono image_index={1} url={'/'}/> */}

            <Icono image_index={3} url={'https://github.com/ROCKEMMA'} target={'_blank'}/>
            
            <Icono image_index={4} url={'https://www.instagram.com/_rockemma/'} target={'_blank'}/>

            <Icono image_index={5} url={'/'}/>

            <Icono image_index={9} url={'https://github.com/ROCKEMMA'} target={'_blank'}/>
        </ul>
    );
}

export {Footer};