import React from 'react';
import './Contact.scss';
import TechnologyIcon from '../icons/TechnologyIcon';
import Form from '../Form';
import ContactIcon from '../icons/ContactIcon';

export default function Contact() {
	return (
		<section className="contact" id="contact">
			<h2>Contacto</h2>
			<div className="content">
				<Form />
				<div className="line" />
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
			<div className="bottom">
				<span>Diseñado y construido por Ramiro Gómez</span>
				<div className="technologies">
					<TechnologyIcon technology="React" filter="dark-blue" />
					<TechnologyIcon technology="SASS" filter="dark-blue" />
				</div>
				<a href="/">Ver codigo</a>
			</div>
		</section>
	);
}
