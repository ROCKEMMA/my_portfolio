import './Portfolio.css';

function Portfolio (props){
    return (
        <section className={`section sectionPortfolio ${props.page === 4 ? "active" : null}`}>
            <img className='trabajando' src='https://bakuidealab.az/wp-content/uploads/2019/11/dessigner.gif' alt='hls'/>
        </section>
    );
}

export {Portfolio};