import React, { useState, useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { portrait, landscape } from './AOSAnimations.json';

function App() {
	const [isPageLoaded, setIsPageLoaded] = useState(false);
	const [animations, setAnimations] = useState(portrait);

	useEffect(() => {
		ReactGA.initialize('G-3VR9638X5V');
		ReactGA.pageview('/');
	}, []);

	const handleTransition = (e) => {
		e.target.classList.add('d-none');
		e.target.removeEventListener('transitionend', handleTransition);
	};
	const handleLoad = () => {
		document.removeEventListener('load', handleLoad);
		setIsPageLoaded(true);

		const loader = document.querySelector('.loader');
		loader.classList.add('hidden');
		loader.addEventListener('transitionend', handleTransition);
		//	No scroll during load screen
		document.body.classList.remove('overflow-hidden');
	};
	const handleResize = () => {
		if (window.matchMedia('(max-aspect-ratio: 13/9)').matches) {
			setAnimations(portrait);
		} else {
			setAnimations(landscape);
		}
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
		<React.StrictMode>
			<div className="App">
				<Navbar />
				<Home isPageLoaded={isPageLoaded} />
				<Projects aosAnimations={animations.projects} />
				<About aosAnimations={animations.about} />
				<Contact aosAnimations={animations.contact} />
				<Footer />
			</div>
		</React.StrictMode>
	);
}

export default App;
