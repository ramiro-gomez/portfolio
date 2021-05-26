import React from 'react';
import './About.scss';
import TechnologyIcon from '../icons/TechnologyIcon';
import foto from '../../assets/images/foto.png';

export default function About() {
	return (
		<section id="about">
			<h2>Sobre mi</h2>
			<div className="wrapper">
				<p className="text">
					Soy Ramiro Gómez, un desarrollador Front-end autodidacta.
					<br />
					<br />
					Hace 3 años decidi crear mi propio videojuego para celulares, lo que me llevo aprender a
					programar y adentrarme en el mundo del software. Desde ese entonces me interese
					en el desarrollo, y me mantuve aprendiendo y mejorando continuamente.
					<br />
					<br />
					Personalmente, me gusta solucionar problemas y me esfuerzo en lograr resultados
					de buena calidad.
					<br />
					Como hobby disfruto ver peliculas e informarme sobre ciencia.
				</p>
				<div className="line" />
				<div className="photo-technologies">
					<img src={foto} alt="mi foto" />
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
