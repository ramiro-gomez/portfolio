import React from 'react';
import './Footer.scss';
import TechnologyIcon from '../TechnologyIcon';

export default function Footer() {
	return (
		<footer className="footer">
			<p className="footer__text">Diseñado y construido por Ramiro Gómez</p>
			<div className="footer__technologies">
				<TechnologyIcon
					type="React"
					filter="dark-blue"
					imgClassName="footer__technology-img"
					textClassName="footer__technology-text"
				/>
				<TechnologyIcon
					type="SASS"
					filter="dark-blue"
					imgClassName="footer__technology-img"
					textClassName="footer__technology-text"
				/>
			</div>
			<a
				className="footer__link"
				href="https://github.com/ramiro-gomez/portfolio"
				target="_blank"
				rel="noreferrer"
			>
				Ver codigó
			</a>
		</footer>
	);
}
