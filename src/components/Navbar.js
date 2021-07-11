import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from './svgs/LogoSVG';

export default function Navbar() {
	const [navbarState, setNavbarState] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [circleMenuStyle, setCircleMenuStyle] = useState({});
	let previousScroll = window.pageYOffset;

	const handleScroll = () => {
		if (window.pageYOffset === 0) {
			setNavbarState('on-top');
		} else if (previousScroll <= window.pageYOffset) {
			setNavbarState('scrolling-down');
		} else {
			setNavbarState('');
		}
		previousScroll = window.pageYOffset;
	};

	const handleClick = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	//	Defines the size of the background circle when the menu is open
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

	return (
		<nav className={`navbar ${navbarState}`}>
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
