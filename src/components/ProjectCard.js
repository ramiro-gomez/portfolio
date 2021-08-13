import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({
	animation, color, title, subTitle, text, imgName, renderLinks, renderTechnologies,
}) {
	const handleTransition = (e) => e.target.classList.remove('p-events-none');

	return (
		<div
			className={`project-card project-card--${imgName} p-events-none`}
			data-aos={animation}
			data-aos-offset="0"
			onTransitionEnd={handleTransition}
			data-testid="project-card"
		>
			<div className="project-card__wrapper">
				<h4 className="project-card__title">{title}</h4>
				<div className="project-card__top">
					<h5 className="project-card__subtitle">{subTitle}</h5>
					<p className="project-card__text">{text}</p>
				</div>
				<div className="project-card__bottom">
					<div className="project-card__links">
						{renderLinks({ className: 'project-card__link' })}
					</div>
					<div className="project-card__details">
						<h6 className="project-card__details-title">Tecnologías utilizadas:</h6>
						<div className="project-card__technologies">
							{renderTechnologies({
								imgClassName: 'project-card__technology-img',
								textClassName: 'project-card__technology-text',
							})}
						</div>
					</div>
				</div>
			</div>
			<div className={`project-card__aside-right project-card__aside-right--${color}`} />
			<div className={`project-card__border-aside project-card__border-aside--${color}`} />
		</div>
	);
}
