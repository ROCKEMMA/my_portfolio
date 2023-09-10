import {imgCertificates} from '../../assets/certificates/imgCertificates.js';
import './Certificate.css'

function Item({image,description}){
    return(
        <li>
            <img className='sectionCertificate__img' src={image} alt={description}/>
        </li>
    );
}


function Certificate (props){

    return(
        <section className={`section sectionCertificate ${props.page === 2 ? "active" : null}`}>
            <h1>Certificados</h1>
            <ul className='sectionCertificate__list'>
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

