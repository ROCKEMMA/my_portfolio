import './General.css';

const General = (props) => {
    return(
        <div className='general'>
            <p className='general__title'>Lista de temas</p>
            <p className='general__description'>{props.description}</p>
            <ul className='general__list'>
                {props.list.map((item, index) => (
                    <li 
                    key={index}
                    className='general__item'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {General};