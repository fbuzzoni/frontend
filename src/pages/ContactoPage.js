import React from 'react';
import { useState } from 'react';
import axios from 'axios'

import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));

    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    return (
        <main>
            <div class="contacto">
                <h1>Contacto</h1>
                <br />
                <div class="grid">
                    <div class="uno">
                        <form action="/contacto" method="post" class="formulario" onSubmit={handleSubmit}>
                            <p><label>Nombre</label><input type="text" name="nombre" size="40" placeholder="John Doe" value={formData.nombre} onChange={handleChange}></input></p>
                            <p><label>email</label><input type="email" name="email" required placeholder="jdoe@gmail.com" value={formData.email} onChange={handleChange}></input></p>
                            <p><label>Teléfono</label><input type="text" name="telefono" required placeholder="+54 9 11 XXXX XXXX" value={formData.telefono} onChange={handleChange}></input></p>
                            <p><label className="labelcomentario">Mensaje</label><textarea name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange}
                                cols="1" rows="3"></textarea></p>
                            <br />
                            <p className="centrado"><input type="submit" value="Enviar"></input></p>
                            {sending ? <p> Enviando...</p> : null}
                            {msg ? <p> {msg} </p> : null}
                        </form>
                    </div>
                    <div class="dos">
                        <h3>Otras vías de contacto</h3>
                        <br />
                        <div>
                            <p><img src="https://img.icons8.com/material/24/000000/android--v1.png" alt="phone" />  +54 9 11 XXXX XXXX</p>
                            <p><img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" alt="mail" />  generic@gmail.com</p>
                            <p><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="LinkedIN" />  https://www.linkedin.com/in/federico-buzzoni/</p>
                            <p><img src="https://img.icons8.com/ios-glyphs/30/000000/skype.png" alt="Skype" />  fbuzzoni</p>



                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;