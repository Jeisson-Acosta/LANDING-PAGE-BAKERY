import '../styles/FooterApp.css'
import { BaguetteIcon, InstagramIcon, MailIcon, MetaFacebookIcon, TwitterIcon } from './Icons.jsx'
import emailjs from 'emailjs-com';
import { useState } from 'react';

export function FooterApp() {

    const [email, setEmail] = useState('');

    const handleSubmitFormContact = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wxkfg3s',
            'template_fw2ecl6',
            e.target,
            'ciQW2EP1E2FnGzbHW'
        ).then(
            (result) => {
                console.log('Correo enviado correctamente', result.text);
            },
            (error) => {
                console.log('Error al enviar el correo', error);
            }
        )
    }
    return (
        <footer className='footer-app'>
            <section className="container-contact">
                <div className="icon">
                    <MailIcon />
                </div>
                <h1 className="title-section-contact">
                    Join the Bread Club
                </h1>
                <p className='description-section-contact'>
                    Get weekly updates on our special bakes, workshops, and exclusive offers delivered straight to your inbox.
                </p>
                <form className='form-contact' id='contact' onSubmit={e => handleSubmitFormContact(e)}>
                    <input type="email" placeholder='Your email address' value={email} onChange={e => setEmail(e.target.value)} />
                    <button type='submit'>Subscribe</button>
                </form>
            </section>
            <section className="container-end-footer">
                <div className="container-logo-company">
                    <BaguetteIcon />
                    <h3>Bakery</h3>
                </div>
                <div className='container-rights-reserved'>
                    <p>© 2026 Bakery. All rights reserved.</p>
                </div>
                <div className="social-media">
                    <a href="#">
                        <InstagramIcon />
                        Instagram
                    </a>
                    <a href="#">
                        <MetaFacebookIcon />
                        Facebook
                    </a>
                    <a href="#">
                        <TwitterIcon />
                        Twitter
                    </a>
                </div>
            </section>
        </footer>
    )
}