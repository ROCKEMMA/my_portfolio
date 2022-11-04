import './Stacks.css';
import { Item } from './Item/Item';

// section data
import { stackData } from './data';


function Stacks (props){
    return(
        <section className={`section sectionStacks ${props.page === 3 ? "active" : null}`}>
            
            <h1>Habilidades</h1>

            <div className='sectionStacks__stacksList'>
                {
                    stackData.map((item,index) => (
                        <Item
                            key={item.title}
                            item={item}
                            index={index}
                        />
                    ))
                }
            </div>
            
        </section>
    );
}

export {Stacks};