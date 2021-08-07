import React, { useEffect } from 'react';
import './Modal.scss';

export default function Modal({
	title, handleClick, className, renderContent,
}) {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return (() => {
			document.body.classList.remove('overflow-hidden');
		});
	}, []);

	return (
		<div className={`modal modal--${className}`}>
			<div className="modal__overlay" onClick={handleClick} />
			<div className="modal__box">
				<div className="modal__top">
					<h3 className="modal__title">{title}</h3>
					<button className="modal__close-btn" type="button" onClick={handleClick}>
						<span className="iconify" data-icon="clarity:times-line" />
					</button>
				</div>
				<div className="modal__content-wrapper">
					{renderContent({ className: 'modal__content' })}
				</div>
			</div>
		</div>
	);
}
