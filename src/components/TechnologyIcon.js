import React from 'react';
import './TechnologyIcon.scss';
import Icon from './Icon';

export default function TechnologyIcon({
	type, filter, imgClassName, textClassName,
}) {
	return (
		<div className="technology">
			<Icon type={type} imgClassName={`technology__icon technology__icon--filter-${filter} ${imgClassName}`} />
			<p className={`technology__name ${textClassName}`}>{type}</p>
		</div>
	);
}
