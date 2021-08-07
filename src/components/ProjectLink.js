import React from 'react';
import './ProjectLink.scss';

export default function ProjectLink({
	color, url, handleClick, className, children,
}) {
	return (
		<a
			className={`project-link project-link--${color} ${className}`}
			href={url}
			onClick={handleClick}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
}
