import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({
	color, title, subTitle, text, imgSrc, links, technologies,
}) {
	return (
		<div
			className="project-card"
			style={{ backgroundImage: `url(${imgSrc})` }}
		>
			<div className="content">
				<h3 className="title">{title}</h3>
				<div className="top">
					<h4>{subTitle}</h4>
					<p>{text}</p>
				</div>
				<div className="bottom">
					<div className="links">
						{links}
					</div>
					<div className="details">
						<span>Tecnologias utilizadas:</span>
						<div className="technologies">
							{technologies}
						</div>
					</div>
				</div>
			</div>
			<div className={`aside-right aside-${color}`} />
			<div className={`border-aside border-${color}`} />
		</div>
	);
}