import React from 'react';
import './About.scss';
import TechnologyIcon from '../icons/TechnologyIcon';
import foto from '../../images/foto.png';

export default function About() {
	return (
		<section className="about" id="about">
			<h2>Sobre mi</h2>
			<div className="content">
				<div className="text">
					<p>
					Soy Ramiro Gómez, un desarrollador Front-end autodidacta.
						<br />
						<br />
					Hace 3 años decidi crear mi propio videojuego para celulares, lo que me llevo aprender a
					programar y adentrarme en el mundo del software. Desde ese momento estoy en un constante
					proceso de mejora y aprendizaje.
						<br />
						<br />
					Disfruto de solucionar problemas y me esfuerzo en lograr resultados de buena calidad.
						<br />
					Como hobby me gusta ver peliculas e informarme sobre ciencia.
					</p>
				</div>
				<div className="line" />
				<div className="photo-knowledge">
					<img src={foto} alt="mi foto" />
					<div className="knowledge">
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
