import en_progreso from '../../assets/en_progreso.gif';
import './Stacks.css';

function Stacks (props){
    return(
        <section className={`section-stacks ${props.page === 3 ? "active" : null}`}>
            <img src={en_progreso} alt="img temporal" />
        </section>
    );
}

export {Stacks};