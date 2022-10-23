import React, { useRef } from 'react';
import './Contact.css';
import './Modal.css';
import img_ico from '../../assets/ico/list_img_ico';
import emailjs from '@emailjs/browser';



function Contact (props){

    // REFERENCE TO DOM MODAL
    let modal = document.querySelector('#modal');

    // PROGRAMMING API EmailJS
    const form = useRef();
      
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_lod5trq', 'template_b40hr0b', form.current, 'G5o3t0hG-CRduk9kW')
        .then((result) => {
            modal.showModal();
        }, (error) => {
    });}

    // MODAL PROGRAMMING
    const closeModal = ()=> {
        modal.close();
        form.current.reset();
    }

    return(
        <section className={`section-contact section-applies ${props.page === 5 ? "active" : null}`}>
            
            <div className='from-box'>
                {/* Form banner */}
                <div className='form-banner'>
                    <span>Contactame</span>
                    <p>
                    Completa el formulario y estaremos en contacto, también puedes hablarme en mis redes sociales.
                    </p>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/004/579/307/small_2x/programmer-working-on-computer-with-lots-of-data-free-vector.jpg' alt=''/>
                </div>

                {/* Form section */}
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <span>Tu nombre</span>
                    <div className='input-box'>
                        <img src={`${img_ico[7].img}`} alt=''/>
                        <input 
                        type='text'
                        name='user_name'
                        autoComplete='off'
                        />
                    </div>
                    
                    <span>Correo</span>
                    <div className='input-box'>
                        <img src={`${img_ico[6].img}`} alt=''/>
                        <input 
                        type='text'
                        name='user_email'
                        />
                    </div>

                    <span>Mensaje</span>
                    <div className='input-box'>
                        <textarea 
                        type='text'
                        name='message'
                        autoComplete='off'
                        />
                    </div>
                    <button 
                    className='btn-enviar' 
                    type='submit'>
                    Enviar
                    </button>

                </form>

                {/* Modal section*/}
                <dialog id='modal'>
                    <div className='modal-content'>
                        <p>¡Ahora estaremos en contacto!</p>
                        <div id='btn-to-close' onClick={closeModal}>Cerrar</div>
                    </div>
                </dialog>

            </div>

        </section>
    );
}

export {Contact};