import React, { useState } from 'react';
import './Form.scss';
import UIMessage from './UIMessage';

export default function Form() {
	const [hasToShowMessage, setHasToShowMessage] = useState(false);
	const [messageStatus, setMessageStatus] = useState('');
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const shouldLabelBeFloating = (inputValue) => (inputValue === '' ? '' : 'floating-label');

	const showMessage = () => {
		if (hasToShowMessage) {
			if (messageStatus === '200') {
				return <UIMessage type="successful">Tu mensaje se ha enviado correctamente!</UIMessage>;
			}
			if (messageStatus === '404') {
				return (
					<UIMessage type="error">
						Este formulario solo funciona desde Netlify.
						<br />
						<a href="/" target="_blank" rel="noreferrer">
							Pulsa aqui para redirigirte a mi portfolio desde Netlify.
						</a>
					</UIMessage>
				);
			}
			if (messageStatus === 'error') {
				return (
					<UIMessage type="error">
						Lo siento! Ha habido un error al enviar el mensaje.
						<br />
						Por favor, intenta contactarme por otro medio.
					</UIMessage>
				);
			}
		}
		return <></>;
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const encode = (data) => Object.keys(data)
		.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
		.join('&');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'portfolio-form',
				...form,
			}),
		})
			.then((result) => {
				if (result.status === 404) {
					setMessageStatus('404');
				} else if (result.status === 200) {
					setMessageStatus('200');
				}
				setHasToShowMessage(true);
				setInterval(() => setHasToShowMessage(false), 6000);
			})
			.catch(() => {
				setMessageStatus('error');
				setHasToShowMessage(true);
				setInterval(() => setHasToShowMessage(false), 8000);
			});
		setForm({
			name: '',
			email: '',
			subject: '',
			message: '',
		});
	};

	return (
		<form
			className="contact-form"
			onSubmit={handleSubmit}
		>
			<div className="input-box">
				<input
					type="text"
					name="name"
					id="name"
					required="required"
					value={form.name}
					onChange={handleChange}
				/>
				<label
					className={shouldLabelBeFloating(form.name)}
					htmlFor="name"
				>
					Nombre
				</label>
			</div>
			<div className="input-box">
				<input
					type="email"
					name="email"
					id="email"
					required="required"
					value={form.email}
					onChange={handleChange}
				/>
				<label
					className={shouldLabelBeFloating(form.email)}
					htmlFor="email"
				>
					E-mail
				</label>
			</div>
			<div className="input-box">
				<input
					type="text"
					name="subject"
					id="subject"
					required="required"
					value={form.subject}
					onChange={handleChange}
				/>
				<label
					className={shouldLabelBeFloating(form.subject)}
					htmlFor="subject"
				>
					Asunto
				</label>
			</div>
			<div className="input-box">
				<textarea
					name="message"
					id="message"
					required="required"
					value={form.message}
					onChange={handleChange}
				/>
				<label
					className={shouldLabelBeFloating(form.message)}
					htmlFor="message"
				>
					Mensaje
				</label>
			</div>
			<input type="submit" value="Enviar mensaje" />
			{showMessage()}
		</form>
	);
}
