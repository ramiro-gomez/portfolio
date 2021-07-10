import React from 'react';
import useAnimatedUnmounting from '../../hooks/useAnimatedUnmounting';
import './Projects.scss';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard';
import ProjectButton from '../ProjectButton';
import TechnologyIcon from '../icons/TechnologyIcon';
import Modal from '../Modal';
import fastmotionVideo from '../../assets/videos/fast-motion-level-1.mp4';

export default function Projects({
	animations: {
		titleAnim, card1Anim, card2Anim, card3Anim,
	},
}) {
	const [mount, unmount, isShowing, currentAnimation] = useAnimatedUnmounting({
		animationIn: 'modal-overlay-in',
		animationOut: 'modal-overlay-out',
		time: 200,
	});

	const toggleModal = () => {
		if (isShowing) unmount();
		else mount();
	};
	const handleOnLoad = (e) => {
		e.target.volume = 0.6;
	};

	return (
		<section id="projects">
			<h2 data-aos={titleAnim}>Proyectos</h2>
			<div className="wrapper">
				<ProjectCard
					animation={card1Anim}
					color="blue"
					title="Serner"
					subTitle="Sitio web responsive"
					text={(
						<>
							Diseñe y desarrolle este sitio web como mi proyecto final
							para el curso de desarrollo web en CoderHouse.
							<br />
							Tanto la empresa como el contenido son inventados.
						</>
					)}
					imgName="serner"
					links={(
						<>
							<ProjectButton
								color="blue"
								url="https://serner.netlify.app"
							>
								Demo
							</ProjectButton>
							<ProjectButton
								color="white"
								url="https://github.com/ramiro-gomez/serner"
							>
								Código
							</ProjectButton>
						</>
					)}
					technologies={(
						<>
							<TechnologyIcon type="HTML5" filter="blue" />
							<TechnologyIcon type="Bootstrap" filter="blue" />
							<TechnologyIcon type="SASS" filter="blue" />
						</>
					)}
				/>
				<ProjectCard
					animation={card2Anim}
					color="violet"
					title="Coin x Coin"
					subTitle="Aplicación web"
					text={(
						<>
							Realice este proyecto para poner en práctica mis conocimientos en JavaScript.
							<br />
							Me pareció interesante hacer una app para calcular el intercambio de divisas.
						</>
					)}
					imgName="coin-x-coin"
					links={(
						<>
							<ProjectButton
								color="violet"
								url="https://coin-x-coin.netlify.app"
							>
								Demo
							</ProjectButton>
							<ProjectButton
								color="white"
								url="https://github.com/ramiro-gomez/coin_x_coin"
							>
								Código
							</ProjectButton>
						</>
					)}
					technologies={(
						<>
							<TechnologyIcon type="HTML5" filter="violet" />
							<TechnologyIcon type="Tailwind" filter="violet" />
							<TechnologyIcon type="JavaScript" filter="violet" />
							<TechnologyIcon type="Jest" filter="violet" />
						</>
					)}
				/>
				<ProjectCard
					animation={card3Anim}
					color="light-blue"
					title="Fast Motion"
					subTitle="Videojuego Android"
					text={(
						<>
							Mi primer proyecto.
							<br />
							Actualmente llevo 3 años llevando a cabo su diseño y desarrollo en mis tiempos libres.
						</>
					)}
					imgName="fast-motion"
					links={(
						<ProjectButton
							color="light-blue"
							handleClick={toggleModal}
						>
							Preview
						</ProjectButton>
					)}
					technologies={(
						<>
							<TechnologyIcon type="Java" filter="light-blue" />
							<TechnologyIcon type="libGDX" filter="light-blue" />
						</>
					)}
				/>
				{isShowing
				&& (
					<Modal
						title="FastMotion - Primer nivel"
						className={currentAnimation}
						handleClick={toggleModal}
					>
						<video src={fastmotionVideo} autoPlay controls onLoadStart={handleOnLoad} />
					</Modal>
				)}
			</div>
		</section>
	);
}
