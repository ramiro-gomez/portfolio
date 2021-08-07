import React from 'react';
import './About.scss';
import TechnologyIcon from '../TechnologyIcon';
import photoWebP from '../../assets/images/photo.webp';
import photo from '../../assets/images/photo.jpg';

export default function About({
	animations: {
		titleAnim, wrapperAnim, textAnim, photoTechnologiesAnim,
	},
}) {
	return (
		<section className="about">
			<h3 className="about__title" data-aos={titleAnim}>Sobre mi</h3>
			<div className="about__wrapper" data-aos={wrapperAnim}>
				<p className="about__text" data-aos={textAnim}>
					Soy Ramiro Gómez, un desarrollador autodidacta.
					<br />
					<br />
					Hace 3 años decidí crear mi propio videojuego para celulares, lo que me llevo aprender a
					programar y adentrarme en el mundo del software. Desde ese entonces me interese
					en el desarrollo, y me mantuve aprendiendo y mejorando continuamente.
					<br />
					<br />
					Personalmente me gusta solucionar problemas y me esfuerzo en lograr resultados
					de buena calidad.
					<br />
					Como hobby disfruto ver películas e informarme sobre ciencia.
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
								type="Git"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="HTML5"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="CSS3"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="SASS"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="Bootstrap"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="Tailwind"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="JavaScript"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="React"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="Java"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
							<TechnologyIcon
								type="libGDX"
								filter="dark-blue"
								imgClassName="about__technology-img"
								textClassName="about__technology-text"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
