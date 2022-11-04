import './Modal.css';

// Components
import { General } from './General';

// Images pad
const ico = require.context('../../../assets/ico/',true);


const Modal = (props) => {
    return(
        <>
            <dialog className='overlay'>
                <div className="modalWindow">
                    {/* MODAL HEADER */}
                    <div className='modalWindow__header'>
                        <img className='modalWindow__imgStack' src={props.stackData.imgIco} alt="ico 🦆"/>
                        <h3 className='modalWindow__title'>{props.stackData.title}</h3>

                        <img 
                        className='modalWindow__icoClosed'
                        src={ico('./closed.png')}
                        alt="ico closed"
                        onClick={() => props.setModal(-1)}
                        />
                    </div>

                    {/* MODAL NAV BAR*/}
                    <ul className='modalWindow__navBar'>
                        <li className='modalWindow__button activateButton'>Generl</li>
                        <li className='modalWindow__button'>Proyectos & código</li>
                    </ul>

                    <General
                    title={props.stackData.title}
                    description={props.stackData.description}
                    list={props.stackData.list}
                    />

                    {/* MODAL SECTION  BUTTON*/}
                    <div className='general__buttonBox'>
                        <div 
                        className='general__button'
                        onClick={() => props.setModal(-1)}
                        >Cerrar</div>
                        <div className='general__button general__button--fill'>Sugerir tema</div>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export {Modal};
