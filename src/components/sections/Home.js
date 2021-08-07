import React from 'react';
import './Home.scss';

export default function Home({ isPageLoaded }) {
	return (
		<section className="home">
			<ul className="squares">
				<li className="squares__item squares__item--1" />
				<li className="squares__item squares__item--2" />
				<li className="squares__item squares__item--3" />
				<li className="squares__item squares__item--4" />
				<li className="squares__item squares__item--5" />
				<li className="squares__item squares__item--6" />
				<li className="squares__item squares__item--7" />
				<li className="squares__item squares__item--8" />
				<li className="squares__item squares__item--9" />
				<li className="squares__item squares__item--10" />
			</ul>

			<div className="title">
				<div className="title__wrapper">
					<div className={`title__upper ${isPageLoaded ? 'title__upper--anim' : ''}`}>
						<h1 className="title__upper-text">Hola,</h1>
						<h1 className="title__upper-text">
							Soy
							<span className="title__red"> Ramiro Gómez</span>
						</h1>
					</div>
				</div>
				<div className="title__wrapper">
					<div className={`title__lower ${isPageLoaded ? 'title__lower--anim' : ''}`}>
						<h2 className="title__lower-text">
							Desarrollador
							<span className="title__red"> Front-end</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
