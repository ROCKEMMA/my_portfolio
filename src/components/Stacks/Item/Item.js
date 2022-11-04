import { useState } from 'react';
import './Item.css';

// Modal component
import { Modal } from '../Modal/Modal';

const Item = (props) =>{

    const [modal, setModal] = useState(-1);

    return(
        <>
            <div 
            className='sectionStacks__item' 
            onClick={() => setModal(props.index)}>
                <img className='sectionStacks__img' src={props.item.imgIco} alt="img stack"/>
            </div>

            {modal >= 0 ? <Modal stackData={props.item} setModal={setModal}/> :null}
        </>
    );
}

export {Item};