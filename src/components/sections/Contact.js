import React from 'react';
import './Contact.scss';
import Form from '../Form';
import Icon from '../Icon';

export default function Contact({
	animations: {
		titleAnim, wrapperAnim, formAnim, contactInformationAnim,
	},
}) {
	return (
		<section className="contact" id="contact">
			<h3 className="contact__title" data-aos={titleAnim}>Contacto</h3>
			<div className="contact__wrapper" data-aos={wrapperAnim}>
				<Form animation={formAnim} />
				<div className="contact__information-wrapper" data-aos={contactInformationAnim}>
					<h6 className="contact__information-title">También podes encontrarme en:</h6>
					<div className="contact__bar">
						<a className="contact__link" href="https://github.com/ramiro-gomez" target="_blank" rel="noreferrer">
							<Icon type="GitHub" />
						</a>
						<a className="contact__link" href="https://www.linkedin.com/in/ramiro-gómez" target="_blank" rel="noreferrer">
							<Icon type="LinkedIn" />
						</a>
						<a className="contact__link" href="mailto: gomezramiro2002@gmail.com" target="_blank" rel="noreferrer">
							<Icon type="Gmail" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
