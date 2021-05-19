import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from './icons/svgs/LogoSVG';

export default function Navbar() {
	const [isScrollingUp, setISScrollUp] = useState(false);
	const [isOnTopPage, setIsOnTopPage] = useState(true);
	let previousScroll = window.pageYOffset;

	const handleScroll = () => {
		setISScrollUp(previousScroll >= window.pageYOffset);
		previousScroll = window.pageYOffset;
		setIsOnTopPage(window.pageYOffset === 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
			<div>
				<a href="#projects">Proyectos</a>
				<a href="#about">Sobre mi</a>
				<a href="#contact">Contacto</a>
			</div>
		</nav>
	);
}
