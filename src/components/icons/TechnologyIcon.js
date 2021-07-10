import React from 'react';
import './TechnologyIcon.scss';
import Icon from './Icon';

export default function TechnologyIcon({ type, filter }) {
	return (
		<>
			<Icon type={type} isATechonologyIcon filter={filter} />
			<p className="technology-name">{type}</p>
		</>
	);
}
