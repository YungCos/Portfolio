import React, { useEffect } from "react";
import HeroBackground from "./HeroBackground";
import Icon from "./Icon";

const Hero = () => {
	return (
		<section className="text-white h-screen flex items-center justify-center">
			<HeroBackground />
			<div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4 z-10">
				<div className="text-center md:text-left md:flex-1">
					<p className="text-xl mb-2">👋 Hey, my name is </p>
					<h1 className="text-8xl md:text-9xl font-bold mb-4">
						Miles Bernstein
					</h1>
					<p className="text-4xl mb-6">I am a Software Engineer</p>
					<div
						className="inline-flex rounded-md shadow-sm "
						role="group"
					>
						<a href="https://github.com/YungCos">
							<button
								type="button"
								className="px-4 py-2 font-medium border rounded-s-lg hover:bg-gray-100 hover:text-blue-700 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 ease-out duration-200"
							>
								<Icon name="gh" size={25} color={"#ffffff"} />
								<span className="pl-3">Github</span>
							</button>
						</a>
						<a href="https://www.linkedin.com/in/milesbernstein48/">
							<button
								type="button"
								className="px-4 py-2 font-medium border  hover:bg-gray-100 hover:text-blue-700 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 ease-out duration-200"
							>
								<Icon
									name="linkedin"
									size={25}
									color={"#ffffff"}
								/>
								<span className="pl-3">LinkedIn</span>{" "}
							</button>
						</a>
						<a href="src\assets\MilesBernsteinResume.pdf">
							<button
								type="button"
								className="px-4 py-2 font-medium border rounded-e-lg hover:bg-gray-100 hover:text-blue-700 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 ease-out duration-200"
							>
								<Icon
									name="resume"
									size={25}
									color={"#ffffff"}
								/>
								<span className="pl-3">Resume</span>{" "}
							</button>
						</a>
					</div>
				</div>
				<div
					id="pfp-image"
					className="mt-5 md:mt-0 h-auto max-w-xl up-and-down flex justify-center items-center py-4 "
				>
					<img
						src="/assets/images/linkedinpfp.png"
						alt="Miles Bernstein"
						className="w-1/2 h-1/2 md:w-full md:h-full object-cover rounded-lg shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
