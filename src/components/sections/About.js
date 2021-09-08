import React from 'react';
import './About.scss';
import TechnologyIcon from '../TechnologyIcon';
import photoWebP from '../../assets/images/photo.webp';
import photo from '../../assets/images/photo.jpg';

export default function About({
	aosAnimations: {
		titleAnim, wrapperAnim, textAnim, photoTechnologiesAnim,
	},
}) {
	return (
		<section className="about" id="about">
			<h3 className="about__title" data-aos={titleAnim}>Sobre mi</h3>
			<div className="about__wrapper" data-aos={wrapperAnim}>
				<p className="about__text" data-aos={textAnim}>
					Soy Ramiro Gómez, un desarrollador autodidacta.
					<br />
					<br />
					Hace 3 años aprendí a programar para crear mi propio videojuego para celulares.
					Desde ese entonces me interese en el desarrollo de software,
					y continúe aprendiendo nuevas tecnologías y mejorando continuamente.
					<br />
					<br />
					Personalmente me gusta solucionar problemas y me esfuerzo en lograr resultados
					de buena calidad.
					<br />
					Disfruto ver películas e informarme sobre ciencia como hobby.
				</p>
				<div className="about__middle-line" />
				<div className="about__right-container" data-aos={photoTechnologiesAnim}>
					<picture>
						<source srcSet={photoWebP} type="image/webp" />
						<img className="about__photo" src={photo} alt="mi foto" />
					</picture>
					<div className="about__knowledge-wrapper">
						<h6 className="about__knowledge-title">Conocimientos:</h6>
						<div className="about__technologies">
							<TechnologyIcon
								icon="Git"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="HTML5"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="CSS3"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="SASS"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="Bootstrap"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="Tailwind"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="JavaScript"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="React"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="Java"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								icon="libGDX"
								filter="dark-blue"
								iconClassName="about__technology-icon"
								textClassName="about__technology-text"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
