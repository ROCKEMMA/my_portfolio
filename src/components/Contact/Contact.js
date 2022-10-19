import { useState } from 'react';
import './Contact.css';


function Contact (props){

    const [value, setValue] = useState({nombre: '', correo: '', mensaje:''});

    const handleChange = (e) => {
        setValue((state)=>({
            ...state,
            [e.target.name] : e.target.value
        }));
    }

    console.log(value);

    return(
        <section className={`section-contact ${props.page === 4 ? "active" : null}`}>
            
{/*             <div>
                <span>Contactame</span>
                <p>
                Completa el formulario y estaremos en contacto, también puede contactarme en mis redes sociales.
                </p>
            </div>

            <div>
                <span>Nombre</span>
                <input 
                type='text'
                name='nombre'
                value={value.nombre}
                autoComplete='off'
                onChange={handleChange}
                />

                <span>Correo</span>
                <input 
                type='text'
                name='correo'
                value={value.correo}
                autoComplete='off'
                onChange={handleChange}
                />

                <span>Mensaje</span>
                <textarea 
                type='text'
                name='mensaje'
                value={value.mensaje}
                autoComplete='off'
                onChange={handleChange}
                />
            </div> */}
        </section>
    );
}

export {Contact};