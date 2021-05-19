/* eslint-disable no-console */
import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
	const handleLoad = () => {
		document.body.classList.remove('overflow-hidden');
		document.querySelector('.loader').classList.add('hidden');
	};

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		window.addEventListener('load', handleLoad);
		return () => window.removeEventListener('load', handleLoad);
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

export default App;
