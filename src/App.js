/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = () => {
		document.body.classList.remove('overflow-hidden');
		document.querySelector('.loader').classList.add('hidden');
		setIsLoaded(true);
	};

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		window.addEventListener('load', handleLoad);
		return () => window.removeEventListener('load', handleLoad);
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Home isLoaded={isLoaded} />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

export default App;
