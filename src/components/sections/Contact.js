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
					<span>También podes encontrarme en:</span>
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
