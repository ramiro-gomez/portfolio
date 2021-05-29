import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from './icons/svgs/LogoSVG';

export default function Navbar() {
	const [isScrollingUp, setISScrollUp] = useState(false);
	const [isOnTopPage, setIsOnTopPage] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [circleMenuStyle, setCircleMenuStyle] = useState({});
	let previousScroll = window.pageYOffset;

	const handleClick = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	//	This defines the state of the Navbar (onTop/scrollingUp/scrollingDown)
	const handleScroll = () => {
		setISScrollUp(previousScroll >= window.pageYOffset);
		previousScroll = window.pageYOffset;
		setIsOnTopPage(window.pageYOffset === 0);
	};

	//	This defines the size of the background circle when the menu is open
	const handleResize = () => {
		const radius = Math.sqrt((window.innerHeight ** 2) + (window.innerWidth ** 2));
		const diameter = radius * 2;
		setCircleMenuStyle({
			width: diameter,
			height: diameter,
			marginTop: -radius,
			marginRight: -radius,
		});

		//	In case the user open the menu and then rotate the screen
		closeMenu();
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		handleResize();
		handleScroll();
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle('overflow-hidden');
	}, [isMenuOpen]);

	const showNav = () => {
		if (isOnTopPage) return 'on-top';
		if (isScrollingUp) return 'scrolling-up';
		return '';
	};

	return (
		<nav className={`nav ${showNav()}`}>
			<a className="logo" href="#home">
				<Logo />
			</a>
			<button
				className={`hamburger hamburger--spin ${isMenuOpen ? 'menu-open' : ''}`}
				type="button"
				onClick={handleClick}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner" />
				</span>
			</button>
			<div
				className={`overlay ${isMenuOpen ? 'menu-open' : ''}`}
				style={circleMenuStyle}
			/>
			<div className={`links ${isMenuOpen ? 'menu-open' : ''}`}>
				<a href="#projects" onClick={closeMenu}>Proyectos</a>
				<a href="#about" onClick={closeMenu}>Sobre mi</a>
				<a href="#contact" onClick={closeMenu}>Contacto</a>
			</div>
		</nav>
	);
}
