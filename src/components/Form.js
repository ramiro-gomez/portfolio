import React, { useState } from 'react';
import useAnimatedUnmounting from '../hooks/useAnimatedUnmounting';
import './Form.scss';
import UIMessage from './UIMessage';

export default function Form({ animation }) {
	const [messageStatus, setMessageStatus] = useState('');
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	//	Delay and animate UIMessage unmounting
	const [mount, unmount, isShowing, currentAnimation] = useAnimatedUnmounting({
		animationIn: 'ui-message-in',
		animationOut: 'ui-message-out',
		time: 200,
	});

	//	Floating label animation while is on focus or value isn't empty
	const shouldLabelBeFloating = (inputValue) => (inputValue !== '' ? 'floating-label' : '');

	const showMessage = () => {
		if (isShowing) {
			switch (messageStatus) {
			case '200':
				return (
					<UIMessage
						className={currentAnimation}
						type="successful"
					>
					Tu mensaje se ha enviado correctamente!
					</UIMessage>
				);
			case '404':
				return (
					<UIMessage
						className={currentAnimation}
						type="error"
					>
					Este formulario solo funciona desde Netlify.
						<br />
						<a href="/" target="_blank" rel="noreferrer">
						Pulsa aqui para redirigirte a mi portfolio desde Netlify.
						</a>
					</UIMessage>
				);
			case 'error':
				return (
					<UIMessage
						className={currentAnimation}
						type="error"
					>
						Lo siento! Ha habido un error al enviar el mensaje.
						<br />
						Por favor, intenta contactarme por otro medio.
					</UIMessage>
				);
			default:
			}
		}
		return null;
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
		let timeout;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'portfolio-form',
				...form,
			}),
		}).then((result) => {
			if (result.status === 404) {
				setMessageStatus('404');
			} else if (result.status === 200) {
				setMessageStatus('200');
			}
			mount();
			timeout = setTimeout(() => {
				unmount();
			}, 6000);
		}).catch(() => {
			setMessageStatus('error');
			mount();
			timeout = setTimeout(() => {
				unmount();
			}, 8000);
		});
		clearTimeout(timeout);
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
			data-aos={animation}
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
