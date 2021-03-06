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
		titleAnim, card1Anim, card2Anim, card3Anim, card4Anim, card5Anim,
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
					color="light-green"
					title="PSL Wallet"
					subtitle="Administrador de presupuesto personal"
					text={(
						<>
							Cree este administrador de presupuesto personal para superar el
							desafio de ingreso de la aceleracion full-stack de Alkemy,
							una plataforma de entrenamientos
							<br />
							<br />
							Realizando este proyecto pude aprender sobre NodeJs, ExpressJs y MySQL
						</>
					)}
					bgImgClass="pslwallet"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="light-green"
								url="http://ec2-18-230-87-228.sa-east-1.compute.amazonaws.com/"
							>
								Ver demo
							</ProjectLink>
							<ProjectLink
								className={className}
								color="white"
								url="https://github.com/ramiro-gomez/psl-wallet"
							>
								Código
							</ProjectLink>
						</>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="TypeScript"
								filter="light-green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="React"
								filter="light-green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Node"
								filter="light-green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Express"
								filter="light-green"
								iconClassName={`${iconClassName}`}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="MySQL"
								filter="light-green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
				<ProjectCard
					animation={card1Anim}
					color="orange"
					title="YUP Commerce"
					subtitle="e-Commerce"
					text={(
						<>
							Construi este e-Commerce simplificado para poner en practica mis conocimientos en
							React-Redux y Typescript
							<br />
							<br />
							Para administrar los productos y usuarios utilice los servicios de
							autenticacion y base de datos ofrecidos por Google Firebase
						</>
					)}
					bgImgClass="yup-commerce"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="orange"
								url="https://yup-commerce.web.app/"
							>
								Ver demo
							</ProjectLink>
							<ProjectLink
								className={className}
								color="white"
								url="https://github.com/ramiro-gomez/yup-commerce"
							>
								Código
							</ProjectLink>
						</>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="TypeScript"
								filter="orange"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="React"
								filter="orange"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Redux"
								filter="orange"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Bootstrap"
								filter="orange"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Firebase"
								filter="orange"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
				<ProjectCard
					animation={card2Anim}
					color="green"
					title="Proyecto Freelance"
					subtitle="Sitio web responsive"
					text={(
						<>
							Desarrollé este sitio web para la empresa Colombiana ¡Ah Carajo!.
							<br />
							<br />
							Trabaje como maquetador junto a:
							<br />
							<br />
							<b>Facundo Creus</b>
							{' - '}
							<i>Maquetador web</i>
							<br />
							<b>Rodrigo Sasia</b>
							{' - '}
							<i>Diseñador UI / UX</i>
						</>
					)}
					bgImgClass="ah-carajo"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="green"
								url="https://fakush.github.io/ahcarajowebsite"
							>
								Ver demo
							</ProjectLink>
							<ProjectLink
								className={className}
								color="white"
								url="https://github.com/fakush/ahcarajowebsite"
							>
								Código
							</ProjectLink>
						</>
					)}
					renderTechnologies={({ iconClassName, textClassName }) => (
						<>
							<TechnologyIcon
								icon="HTML5"
								filter="green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="Bootstrap"
								filter="green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="SASS"
								filter="green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
							<TechnologyIcon
								icon="JavaScript"
								filter="green"
								iconClassName={iconClassName}
								textClassName={textClassName}
							/>
						</>
					)}
				/>
				<ProjectCard
					animation={card3Anim}
					color="violet"
					title="Coin x Coin"
					subtitle="Aplicación web"
					text={(
						<>
							Realice este proyecto para poner en práctica mis conocimientos en JavaScript.
							<br />
							<br />
							Cree esta web app para calcular el intercambio de divisas
							usando la API de CoinBase e implemente test unitarios.
						</>
					)}
					bgImgClass="coin-x-coin"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="violet"
								url="https://coin-x-coin.netlify.app"
							>
								Ver demo
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
					animation={card4Anim}
					color="blue"
					title="Serner"
					subtitle="Sitio web responsive"
					text={(
						<>
							Diseñe y desarrolle este sitio web como mi proyecto final
							en el curso de desarrollo web de CoderHouse.
							Tanto la empresa como el contenido son inventados.
							<br />
							<br />
							Gracias a este proyecto quede en el top 10% del curso y me dieron la
							oportunidad de realizar un proyecto freelance.
						</>
					)}
					bgImgClass="serner"
					renderLinks={({ className }) => (
						<>
							<ProjectLink
								className={className}
								color="blue"
								url="https://serner.netlify.app"
							>
								Ver demo
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
					animation={card5Anim}
					color="light-blue"
					title="Fast Motion"
					subtitle="Videojuego Android"
					text={(
						<>
							Mi primer proyecto.
							<br />
							Actualmente llevo 4 años llevando a cabo su diseño y desarrollo en mis tiempos libres.
						</>
					)}
					bgImgClass="fast-motion"
					renderLinks={({ className }) => (
						<ProjectLink
							className={className}
							color="light-blue"
							handleClick={toggleModal}
						>
							Ver preview
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
