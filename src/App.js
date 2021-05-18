import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Loader from './components/Loader';

function App() {
	return (
		<div className="App">
			<Loader />
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}

export default App;
