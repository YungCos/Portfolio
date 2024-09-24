import React from "react";

const About = () => {
	return (
		<section id="about" className="py-20 bg-gray-900 text-white">
			<div className="container mx-auto flex flex-row ">
				<div className="hidden md:block md:w-1/3">
					<img
						src="src\assets\images\aboutme.jpg" // Replace this with the actual path to Miles' image
						alt="Miles Bernstein"
						className="max-w-full h-auto rounded-lg shadow-xl shadow-gray-950"
						style={{
							transform: "scale(0.8) rotateZ(-2deg)",
						}}
					/>
				</div>
				<div className="md:w-2/3 max-w-screen-lg items-start md:space-x-16 px-4">
					{/* Left Section - About Text */}
					<h2 className="text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-700 to-emerald-700">
						About Me
					</h2>
					<p className="text-lg mb-6 p-6 leading-relaxed tracking-wide text-left">
						Hi there! My name is Miles, and I'm currently a computer
						science student at the University of Toronto Scarborough
						with an interest in all things software. Whether it's
						building full stack web apps, discord bots or
						experimenting with AI, I enjoy the challenge of using
						technology to create meaningful and exciting stuff. For
						me, software development is more than just writing code,
						it's a tool for creativity and exploration, allowing me
						to push boundaries and develop projects that make a real
						impact.
					</p>
					<p className="text-lg mb-6 p-6 leading-relaxed tracking-wide text-left">
						My experience includes roles as a Co-Op Software
						Engineer at TribalScale, DBRS Morningstar and currently
						theScore. I've learned tons about the industry while I
						developed custom software solutions and optimized web
						applications used by thousands of real users. My
						hands-on experience in these roles has not only honed my
						technical skills but also deepened my understanding of
						how to collaborate and communicate effectively
					</p>
					<p className="text-lg mb-6 p-6 leading-relaxed tracking-wide text-left">
						When I'm not writing software, I'm usually rock climbing
						or playing tennis {":)"}
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
