import {imgCertificates} from '../../assets/certificates/imgCertificates.js';
import './Certificate.css'

function Item({image,description}){
    return(
        <li className='item-certificate'>
            <img className='img-certificate' src={image} alt={description}/>
        </li>
    );
}


function Certificate (props){

    return(
        <section className={`section-certificate ${props.page === 2 ? "active" : null}`}>
            <h2 className='title'>Certificados</h2>
            <ul className='list-certificates'>
                {
                imgCertificates.map(img => (
                    <Item
                    key={img.img} // Key unica de cada imagen
                    image={img.img}
                    description={img.alt}
                    />
                ))
                }

            </ul>
        </section>
    );
}

export {Certificate};

