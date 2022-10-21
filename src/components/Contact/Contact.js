import { useState } from 'react';
import './Contact.css';
import img_ico from '../../assets/ico/list_img_ico';


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
        <section className={`section-contact section-applies ${props.page === 5 ? "active" : null}`}>
            
            <div className='from-box'>
                <div className='form-banner'>
                    <span>Contactame</span>
                    <p>
                    Completa el formulario y estaremos en contacto, también puedes hablarme en mis redes sociales.
                    </p>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/004/579/307/small_2x/programmer-working-on-computer-with-lots-of-data-free-vector.jpg' alt=''/>
                </div>

                <div className='form'>
                    <span>Tu nombre</span>
                    <div className='input-box'>
                        <img src={`${img_ico[7].img}`} alt=''/>
                        <input 
                        type='text'
                        name='nombre'
                        value={value.nombre}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </div>
                    
                    <span>Correo</span>
                    <div className='input-box'>
                        <img src={`${img_ico[6].img}`} alt=''/>
                        <input 
                        type='text'
                        name='correo'
                        value={value.correo}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </div>


                    <span>Mensaje</span>
                    <div className='input-box'>
                        <textarea 
                        type='text'
                        name='mensaje'
                        value={value.mensaje}
                        autoComplete='off'
                        onChange={handleChange}
                        />
                    </div>
                    <div className='btn-enviar'>
                        Enviar
                    </div>
                </div>
    
            </div>

        </section>
    );
}

export {Contact};