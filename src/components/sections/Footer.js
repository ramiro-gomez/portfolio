import React from 'react';
import './Footer.scss';
import TechnologyIcon from '../icons/TechnologyIcon';

export default function Footer() {
	return (
		<footer>
			<span>Diseñado y construido por Ramiro Gómez</span>
			<div className="technologies">
				<TechnologyIcon technology="React" filter="dark-blue" />
				<TechnologyIcon technology="SASS" filter="dark-blue" />
			</div>
			<a
				href="https://github.com/ramiro-gomez/portfolio"
				target="_blank"
				rel="noreferrer"
			>
				Ver codigó
			</a>
		</footer>
	);
}
