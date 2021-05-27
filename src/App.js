import React, { useState, useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { portrait, landscape } from './AOSAnimations.json';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [animations, setAnimations] = useState(portrait);

	const handleTransition = (e) => {
		e.target.classList.add('d-none');
		e.target.removeEventListener('transitionend', handleTransition);
	};
	const handleLoad = () => {
		document.removeEventListener('load', handleLoad);
		setIsLoaded(true);

		const loader = document.querySelector('.loader');
		loader.classList.add('hidden');
		loader.addEventListener('transitionend', handleTransition);
		//	No scroll during load screen
		document.body.classList.remove('overflow-hidden');
	};
	const handleResize = () => {
		// eslint-disable-next-line no-unused-expressions
		window.matchMedia('(max-aspect-ratio: 13/9)').matches
			? setAnimations(portrait) : setAnimations(landscape);
	};

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		window.addEventListener('load', handleLoad);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		AOS.init({
			...animations.config,
		});
	}, [animations.config]);

	return (
		<div className="App">
			<Navbar />
			<Home isLoaded={isLoaded} />
			<Projects animations={animations.projects} />
			<About animations={animations.about} />
			<Contact animations={animations.contact} />
			<Footer />
		</div>
	);
}

export default App;
