import React from 'react';
import './Home.scss';

export default function Home() {
	return (
		<section className="home" id="home">
			<ul className="squares">
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
			</ul>

			<div className="text">
				<h1>
					Hola,
					<br />
					Soy
					<span> Ramiro Gómez</span>
				</h1>
				<h2>
					Desarrollador
					<span> Front-end</span>
				</h2>
			</div>
		</section>
	);
}
