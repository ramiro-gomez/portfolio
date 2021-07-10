import React, { useEffect } from 'react';
import './Modal.scss';

export default function Modal({
	title, handleClick, className, children,
}) {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return (() => {
			document.body.classList.remove('overflow-hidden');
		});
	}, []);

	return (
		<div className={`modal-container ${className}`}>
			<div className="overlay" onClick={handleClick} />
			<div className="modal">
				<div className="top">
					<h3>{title}</h3>
					<button type="button" onClick={handleClick}>
						<span className="iconify" data-icon="clarity:times-line" />
					</button>
				</div>
				<div className="content">
					{children}
				</div>
			</div>
		</div>
	);
}
