

// Hoja de estilos
import './Home.css';

const Home = (props) => {

    return(
        <section className={`section-home ${props.page === 1 ? "active" : null}`}>
            <h2>Hola 👋</h2>
            <p className='legend'>Bienvenido a mi colección digital</p>
            <p>
                He desarrollado mi carrera como creador de software y contenidos digitales, para construir herramientas de comunicación y organización, tengo años de experiencia en el autoaprendizaje y la docencia, el cual me ha permitido desarrollar habilidades como; disciplina, trabajo en equipo y la facilidad de nuevos aprendizajes.
            </p>
            <p>
                Entre las herramientas de organización y planificación que utilizo se encuentra <b>Notion</b> como primera libreta digital para la recopilación de información. <b>FigJam</b> para la ideación de nuevos proyectos, comunicación con el equipo y la construcción de nuevos objetivos de valor.
            </p>
            <hr/>
            <div className='portfolio-link'>
                <span>→ </span>
                {/* <a href='https://rockemma.notion.site/Certificados-y-diplomas-3eff3f81b6f24f27a4dddfe0028cf188'>Ver certificados</a> */}
            </div>
            
        </section>
    );
}

export {Home};