import React from 'react';
import './Contact.scss';
import Form from '../Form';
import ContactIcon from '../icons/ContactIcon';

export default function Contact() {
	return (
		<section id="contact">
			<h2>Contacto</h2>
			<div className="wrapper">
				<Form />
				<div className="text">
					<span>Tambien podes encontrarme en:</span>
					<div className="contact-bar">
						<a href="/">
							<ContactIcon icon="GitHub" />
						</a>
						<a href="/">
							<ContactIcon icon="LinkedIn" />
						</a>
						<a href="/" target="_blank" rel="noreferrer">
							<ContactIcon icon="Gmail" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
