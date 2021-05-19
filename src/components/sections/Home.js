import React from 'react';
import './Home.scss';

export default function Home({ isLoaded }) {
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

			<div className="animated-title">
				<div className="text-top">
					<div className={isLoaded ? 'text-top-animation' : ''}>
						<h1>Hola,</h1>
						<h1>
							Soy
							<span> Ramiro Gómez</span>
						</h1>
					</div>
				</div>
				<div className="text-bottom">
					<div className={isLoaded ? 'text-bottom-animation' : ''}>
						<h2>
							Desarrollador
							<span> Front-end</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
