import React from 'react';
import './ProjectButton.scss';

export default function ProjectButton({
	color, url, handleClick, children,
}) {
	return (
		<a
			className={`link link-${color}`}
			href={url}
			onClick={handleClick}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
}
