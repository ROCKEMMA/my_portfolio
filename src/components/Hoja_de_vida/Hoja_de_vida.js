import './Hoja_de_vida.css';

const Hoja_de_vida = (props) => {

    return(
        <section className={`section sectionHojaDeVida ${props.page === 6 ? "active" : null}`}>
            Hola
        </section>
    );

}

export { Hoja_de_vida };