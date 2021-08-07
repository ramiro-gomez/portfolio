import React, { useState } from 'react';
import useAnimatedUnmounting from '../hooks/useAnimatedUnmounting';
import './Form.scss';
import UIMessage from './UIMessage';

const initialForm = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

export default function Form({ animation }) {
	const [messageStatus, setMessageStatus] = useState('');
	const [form, setForm] = useState(initialForm);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const [
		mountUIMessage, unmountUIMessage, isUIMessageShowing, currentUIMessageAnimation,
	] = useAnimatedUnmounting({
		animationIn: 'in',
		animationOut: 'out',
		duration: 200,
	});

	const netlifyEncode = (data) => Object.keys(data)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const netlifyResponse = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: netlifyEncode({
					'form-name': 'portfolio-form',
					...form,
				}),
			});
			setMessageStatus(netlifyResponse.status);
			mountUIMessage();
			setTimeout(unmountUIMessage, 6000);
		} catch (error) {
			setMessageStatus('error');
			mountUIMessage();
			setTimeout(unmountUIMessage, 8000);
		}
		setForm(initialForm);
	};

	const labelFloatingIfNotEmpty = (inputValue) => (inputValue === '' ? null : 'contact-form__label--floating');

	return (
		<form
			className="contact-form"
			onSubmit={handleSubmit}
			data-aos={animation}
		>
			<div className="contact-form__input-box">
				<input
					className="contact-form__input"
					type="text"
					name="name"
					id="name"
					required="required"
					value={form.name}
					onChange={handleChange}
				/>
				<label
					className={`contact-form__label ${labelFloatingIfNotEmpty(form.name)}`}
					htmlFor="name"
				>
					Nombre
				</label>
			</div>
			<div className="contact-form__input-box">
				<input
					className="contact-form__input"
					type="email"
					name="email"
					id="email"
					required="required"
					value={form.email}
					onChange={handleChange}
				/>
				<label
					className={`contact-form__label ${labelFloatingIfNotEmpty(form.email)}`}
					htmlFor="email"
				>
					E-mail
				</label>
			</div>
			<div className="contact-form__input-box contact-form__input-box--3">
				<input
					className="contact-form__input"
					type="text"
					name="subject"
					id="subject"
					required="required"
					value={form.subject}
					onChange={handleChange}
				/>
				<label
					className={`contact-form__label ${labelFloatingIfNotEmpty(form.subject)}`}
					htmlFor="subject"
				>
					Asunto
				</label>
			</div>
			<div className="contact-form__input-box contact-form__input-box--4">
				<textarea
					className="contact-form__text-area"
					name="message"
					id="message"
					required="required"
					value={form.message}
					onChange={handleChange}
				/>
				<label
					className={`contact-form__label ${labelFloatingIfNotEmpty(form.message)}`}
					htmlFor="message"
				>
					Mensaje
				</label>
			</div>
			<input className="contact-form__submit" type="submit" value="Enviar mensaje" />
			{isUIMessageShowing && (() => {
				switch (messageStatus) {
					case 200:
						return (
							<UIMessage className={currentUIMessageAnimation} type="Successful">
								{() => (
									<>
										Tu mensaje se ha enviado correctamente!
									</>
								)}
							</UIMessage>
						);
					case 404:
						return (
							<UIMessage className={currentUIMessageAnimation} type="Error">
								{({ className }) => (
									<>
										Este formulario solo funciona desde Netlify.
										<br />
										<a className={className} href="https://ramiro-gomez.netlify.app/#contact" target="_blank" rel="noreferrer">
										Pulsa aqui para redirigirte a mi portfolio desde Netlify.
										</a>
									</>
								)}
							</UIMessage>
						);
					default:
						return (
							<UIMessage className={currentUIMessageAnimation} type="Error">
								{() => (
									<>
										Lo siento! Ha habido un error al enviar el mensaje.
										<br />
										Por favor, intenta contactarme por otro medio.
									</>
								)}
							</UIMessage>
						);
				}
			})()}
		</form>
	);
}
