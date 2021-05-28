import React from 'react';
import useAnimatedUnmounting from '../../hooks/useAnimatedUnmounting';
import './Projects.scss';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard';
import ProjectButton from '../ProjectButton';
import TechnologyIcon from '../icons/TechnologyIcon';
import Modal from '../Modal';
import sernerImg from '../../assets/images/serner.png';
import coinxcoinImg from '../../assets/images/coin-x-coin.png';
import fastmotionImg from '../../assets/images/fast-motion.png';
import fastmotionVideo from '../../assets/videos/my-video.mp4';

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
		e.target.volume = 0.3;
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
							Diseñe y desarrolle este sitio web como proyecto final
							para el curso de desarrollo web en CoderHouse.
							<br />
							(Invente a la empresa y al contenido)
						</>
					)}
					imgSrc={sernerImg}
					links={(
						<>
							<ProjectButton
								color="blue"
								url="https://sernerconstructora.000webhostapp.com"
							>
								Demo
							</ProjectButton>
							<ProjectButton
								color="white"
								url="https://github.com/ramiro-gomez/serner"
							>
								Codigo
							</ProjectButton>
						</>
					)}
					technologies={(
						<>
							<TechnologyIcon technology="HTML5" filter="blue" />
							<TechnologyIcon technology="CSS3" filter="blue" />
							<TechnologyIcon technology="SASS" filter="blue" />
							<TechnologyIcon technology="Bootstrap" filter="blue" />
						</>
					)}
				/>
				<ProjectCard
					animation={card2Anim}
					color="violet"
					title="Coin x Coin"
					subTitle="Aplicacion web"
					text={(
						<>
							Realice este proyecto para poner en practica mis conocimientos en JavaScript.
							<br />
							Me parecio interesante hacer una app para calcular divisas
							donde se incluya el Dolar Blue y Turista.
						</>
					)}
					imgSrc={coinxcoinImg}
					links={(
						<>
							<ProjectButton
								color="violet"
								url="https://ramiro-gomez.github.io/coin_x_coin/"
							>
								Demo
							</ProjectButton>
							<ProjectButton
								color="white"
								url="https://github.com/ramiro-gomez/coin_x_coin"
							>
								Codigo
							</ProjectButton>
						</>
					)}
					technologies={(
						<>
							<TechnologyIcon technology="HTML5" filter="violet" />
							<TechnologyIcon technology="CSS3" filter="violet" />
							<TechnologyIcon technology="JavaScript" filter="violet" />
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
							Actualmente llevo 3 años diseñando y desarrollandolo en mis tiempos libres.
						</>
					)}
					imgSrc={fastmotionImg}
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
							<TechnologyIcon technology="Java" filter="light-blue" />
							<TechnologyIcon technology="libGDX" filter="light-blue" />
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
