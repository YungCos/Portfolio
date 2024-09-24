import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Assume this is the hero component we created before
import About from "./components/About";
import MyWork from "./components/MyWork";
import Experiences from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<Hero />
			<About />
			<MyWork />
			<Experiences />
			<Contact />
		</div>
	);
};

export default App;
