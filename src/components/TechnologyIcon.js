import React from 'react';
import './TechnologyIcon.scss';
import Icon from './Icon';

export default function TechnologyIcon({
	icon, filter, iconClassName, textClassName,
}) {
	return (
		<div className="technology-icon">
			<Icon icon={icon} iconClassName={`technology-icon__icon technology-icon__icon--filter-${filter} ${iconClassName}`} />
			<p className={`technology-icon__text ${textClassName}`}>{icon}</p>
		</div>
	);
}
