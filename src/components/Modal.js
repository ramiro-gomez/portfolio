import React from 'react';
import './Modal.scss';

export default function Modal({ title, handleClick, children }) {
	return (
		<>
			<div className="overlay" onClick={handleClick} />
			<div className="modal">
				<div className="top">
					<h3>{title}</h3>
					<button type="button" onClick={handleClick}>
						<span className="iconify" data-icon="la:times" />
					</button>
				</div>
				<div className="content">
					{children}
				</div>
			</div>
		</>
	);
}
