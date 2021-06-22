import React from 'react';
import './About.scss';
import TechnologyIcon from '../icons/TechnologyIcon';
import photoWebP from '../../assets/images/photo.webp';
import photo from '../../assets/images/photo.jpg';

export default function About({
	animations: {
		titleAnim, wrapperAnim, textAnim, photoTechnologiesAnim,
	},
}) {
	return (
		<section id="about">
			<h2 data-aos={titleAnim}>Sobre mi</h2>
			<div className="wrapper" data-aos={wrapperAnim}>
				<p className="text" data-aos={textAnim}>
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
				<div className="line" />
				<div className="photo-technologies" data-aos={photoTechnologiesAnim}>
					<picture>
						<source srcSet={photoWebP} type="image/webp" />
						<img src={photo} alt="mi foto" />
					</picture>
					<div className="bottom">
						<span>Conocimientos:</span>
						<div className="technologies">
							<TechnologyIcon technology="Git" filter="dark-blue" />
							<TechnologyIcon technology="Tailwind" filter="dark-blue" />
							<TechnologyIcon technology="HTML5" filter="dark-blue" />
							<TechnologyIcon technology="JavaScript" filter="dark-blue" />
							<TechnologyIcon technology="CSS3" filter="dark-blue" />
							<TechnologyIcon technology="React" filter="dark-blue" />
							<TechnologyIcon technology="SASS" filter="dark-blue" />
							<TechnologyIcon technology="Java" filter="dark-blue" />
							<TechnologyIcon technology="Bootstrap" filter="dark-blue" />
							<TechnologyIcon technology="libGDX" filter="dark-blue" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
