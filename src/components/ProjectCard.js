import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({
	animation, color, title, subTitle, text, imgName, links, technologies,
}) {
	const handleTransition = (e) => {
		if (e.target.className.includes('aos-animate')) {
			e.target.classList.remove('pointer-events-none');
		}
	};

	return (
		<div
			className={`project-card pointer-events-none ${imgName}`}
			data-aos={animation}
			data-aos-offset="0"
			onTransitionEnd={handleTransition}
		>
			<div className="summary">
				<h3 className="title">{title}</h3>
				<div className="top">
					<h4>{subTitle}</h4>
					<p>{text}</p>
				</div>
				<div className="bottom">
					<div className="buttons">
						{links}
					</div>
					<div className="details">
						<span>Tecnologías utilizadas:</span>
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
