import listaSitiosWeb from '../../assets/Temporal_data/Pajinas_web';
import './Destacados.css';

function Destacados(){
    return(
        <div className='Descatados'>
{/*             {listaSitiosWeb.map((sitio, index) => (
                <div key={index} className='SitioWeb'>
                    <h3>{sitio.nombrePagina}</h3>
                    <p><a href={sitio.link} target="_blank" rel="noopener noreferrer">{sitio.link}</a></p>
                    <p>{sitio.descripcion}</p>
                </div>
            ))} */}
        </div>
    );
}
export { Destacados }