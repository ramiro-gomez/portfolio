import React from 'react';
import useAnimatedUnmounting from '../../hooks/useAnimatedUnmounting';
import './Projects.scss';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard';
import ProjectLink from '../ProjectLink';
import TechnologyIcon from '../TechnologyIcon';
import Modal from '../Modal';
import fastmotionVideo from '../../assets/videos/fast-motion-level-1.mp4';

export default function Projects({
	aosAnimations: {
		titleAnim, card1Anim, card2Anim, card3Anim,
	},
}) {
	const [
		mountModal, unmountModal, isModalShowing, currentModalAnimation,
	] = useAnimatedUnmounting({
		animationIn: 'in',
		animationOut: 'out',
		duration: 200,
	});

	const toggleModal = () => {
		if (isModalShowing) unmountModal();
		else mountModal();
	};
	const handleOnLoad = (e) => {
		e.target.volume = 0.6;
	};

	return (
		<section className="projects" id="projects">
			<h3 className="projects__title" data-aos={titleAnim}>Proyectos</h3>
			<div className="projects__wrapper">
				<ProjectCard
					animation={card1Anim}
					color="blue"
					title="Serner"
					subtitle="Sitio web responsive"
					text={(
						<>
							Diseñe y desarrolle este sitio web como mi proyecto final
							para el curso de desarrollo web en CoderHouse.
							<br />
							Tanto la empresa como el contenido son inventados.
						</>
					)}
					imgName="serner"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="blue"
								url="https://serner.netlify.app"
							>
								Demo
							</ProjectLink>
							<ProjectLink
								className={className}
								color="white"
								url="https://github.com/ramiro-gomez/serner"
							>
								Código
							</ProjectLink>
						</>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="HTML5"
								filter="blue"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Bootstrap"
								filter="blue"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="SASS"
								filter="blue"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
				<ProjectCard
					animation={card2Anim}
					color="violet"
					title="Coin x Coin"
					subtitle="Aplicación web"
					text={(
						<>
							Realice este proyecto para poner en práctica mis conocimientos en JavaScript.
							<br />
							Me pareció interesante hacer una app para calcular el intercambio de divisas.
						</>
					)}
					imgName="coin-x-coin"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="violet"
								url="https://coin-x-coin.netlify.app"
							>
								Demo
							</ProjectLink>
							<ProjectLink
								className={className}
								color="white"
								url="https://github.com/ramiro-gomez/coin_x_coin"
							>
								Código
							</ProjectLink>
						</>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="HTML5"
								filter="violet"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Tailwind"
								filter="violet"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="JavaScript"
								filter="violet"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Jest"
								filter="violet"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
				<ProjectCard
					animation={card3Anim}
					color="light-blue"
					title="Fast Motion"
					subtitle="Videojuego Android"
					text={(
						<>
							Mi primer proyecto.
							<br />
							Actualmente llevo 3 años llevando a cabo su diseño y desarrollo en mis tiempos libres.
						</>
					)}
					imgName="fast-motion"
					renderLinks={({ className }) => (
						<ProjectLink
							className={className}
							color="light-blue"
							handleClick={toggleModal}
						>
							Preview
						</ProjectLink>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="Java"
								filter="light-blue"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="libGDX"
								filter="light-blue"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
			</div>
			{isModalShowing && (
				<Modal
					title="FastMotion - Primer nivel"
					currentAnim={currentModalAnimation}
					handleClick={toggleModal}
					renderContent={({ className }) => (
						<video
							className={className}
							src={fastmotionVideo}
							autoPlay
							controls
							onLoadStart={handleOnLoad}
						/>
					)}
				/>
			)}
		</section>
	);
}
