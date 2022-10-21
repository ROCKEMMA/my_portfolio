import './Stacks.css';
import {img_stacks} from '../../assets/stacks/list_img_stacks';


// ITEM STACKS COMPONENT
const StackItem = (props) =>{
    return(
        <div className='stacks-box'>
            <img src={props.img} alt={props.alt}/>
        </div>
    );
}


function Stacks (props){

    return(
        <section className={`section-stacks section-applies ${props.page === 3 ? "active" : null}`}>
            <h2 className='title'>Certificados</h2>

            <div className='stacks'>
                {
                    img_stacks.map(img => (
                    <StackItem
                        key={img.img}
                        img={img.img}
                        alt={img.alt}
                    />
                    ))
                }
            </div>
        </section>
    );
}

export {Stacks};