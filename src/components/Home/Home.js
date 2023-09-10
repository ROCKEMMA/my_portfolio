import './Home.css';

const Home = (props) => {

    return(
        <section className={`section sectionHome ${props.page === 1 ? "active" : null}`}>
            <h1>Hola 👋</h1>
            <p className='sectionHome__legend'>Bienvenido a mi colección digital</p>
            <p className='sectionHome__description'>
                Soy un docente de tecnología y programación con una amplia experiencia en la enseñanza de estas disciplinas. Poseo sólidos conocimientos técnicos y una pasión por la calidad y la excelencia. 
            </p>
            <p className='sectionHome__description'>
                Mi objetivo es aplicar mis habilidades y conocimientos en un entorno laboral relacionado con la inspección de calidad y producción, donde pueda contribuir al éxito y crecimiento de la organización.
            </p>
            <p className='sectionHome__description'>
                Durante los últimos 10 años, he trabajado como docente de tecnología y programación en Colegio Santa Catalina. Durante este tiempo, he diseñado y desarrollado planes de estudio innovadores, he impartido clases magistrales y he facilitado proyectos prácticos para los estudiantes. Además, he supervisado el progreso de los alumnos y he evaluado su rendimiento académico utilizando herramientas de seguimiento como hojas de cálculo y proyecciones gráficas.
                <br/>
                Esta metodología me ha permitido visualizar de manera efectiva el desempeño de los estudiantes y tomar medidas adecuadas para su mejora continua.
            </p>
            
            <hr/>
            <div className='sectionHome__portfolioLink'>
                <span>→ </span>
                <p 
                className='sectionHome__certificateLink'
                onClick={()=> props.setPage(2)
                }>Ver certificados</p>
            </div>
            
        </section>
    );
}

export {Home};