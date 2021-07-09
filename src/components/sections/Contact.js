import React from 'react';
import './Contact.scss';
import Form from '../Form';
import ContactIcon from '../icons/ContactIcon';

export default function Contact({
	animations: {
		titleAnim, wrapperAnim, formAnim, contactInformationAnim,
	},
}) {
	return (
		<section id="contact">
			<h2 data-aos={titleAnim}>Contacto</h2>
			<div className="wrapper" data-aos={wrapperAnim}>
				<Form animation={formAnim} />
				<div className="contact-information" data-aos={contactInformationAnim}>
					<p>También podes encontrarme en:</p>
					<div className="contact-bar">
						<a href="https://github.com/ramiro-gomez" target="_blank" rel="noreferrer">
							<ContactIcon icon="GitHub" />
						</a>
						<a href="https://www.linkedin.com/in/ramiro-gómez" target="_blank" rel="noreferrer">
							<ContactIcon icon="LinkedIn" />
						</a>
						<a href="mailto: gomezramiro2002@gmail.com" target="_blank" rel="noreferrer">
							<ContactIcon icon="Gmail" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
