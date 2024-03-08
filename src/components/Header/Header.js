import './Header.css';

const Header = ()=>{
    return(
        <header className='header'>
            <div className='new_project_box'>
                <h3>Proyectos</h3>
                <div>7</div>
            </div>
            <input type="text" placeholder="Buscar..." />
            <div className="contactar">Contactar</div>
        </header>
    );
}
export { Header }