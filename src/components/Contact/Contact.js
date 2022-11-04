import React, { useRef } from 'react';
import './Contact.css';
/* import './MobileContact.css';
import './Modal.css';
import './MobileModal.css'; */
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
            modal.showModal();
    });}

    // MODAL PROGRAMMING
    const closeModal = ()=> {
        modal.close();
        form.current.reset();
    }

    return(
        <section className={`section sectionContact ${props.page === 5 ? "active" : null}`}>
            
            <div className='sectionContact__'>
                {/* Form banner */}
                <div className='sectionContact__banner'>
                    <h1>Contactame</h1>
                    <p>
                    Completa el formulario y estaremos en contacto, también puedes hablarme en mis redes sociales.
                    </p>
                    <img className='sectionContact__img' src='https://static.vecteezy.com/system/resources/thumbnails/004/579/307/small_2x/programmer-working-on-computer-with-lots-of-data-free-vector.jpg' alt=''/>
                </div>

                <hr className='line'/>

                {/* Form section */}
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <span className='form__titleInput'>Tu nombre</span>
                    <div className='form__inputBox'>
                        <img className='form__ico' src={`${img_ico[7].img}`} alt=''/>
                        <input className='form__input'
                        type='text'
                        name='from_name'
                        autoComplete='off'
                        />
                    </div>
                    
                    <span className='form__titleInput'>Correo</span>
                    <div className='form__inputBox'>
                        <img className='form__ico' src={`${img_ico[6].img}`} alt=''/>
                        <input className='form__input'
                        type='text'
                        name='email_id'
                        />
                    </div>

                    <span className='form__titleInput'>Mensaje</span>
                    <div className='form__inputBox'>
                        <textarea className='form__input form__input--textarea'
                        type='text'
                        name='message'
                        autoComplete='off'
                        />
                    </div>
                    <button 
                    className='form__btn' 
                    type='submit'>
                    Enviar
                    </button>

                </form>

                {/* Modal section*/}
{/*                 <dialog id='modal'>
                    <div className='modal-content'>
                        <p>¡Ahora estaremos en contacto!</p>
                        <div id='btn-to-close' onClick={closeModal}>Cerrar</div>
                    </div>
                </dialog> */}

            </div>

        </section>
    );
}

export {Contact};