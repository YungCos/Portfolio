import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="py-20 bg-gradient-to-r from-red-700 via-yellow-700 to-emerald-700 text-white text-center half-height"
		>
			<div className="container mx-auto flex flex-col items-center">
				<h2 className="text-4xl md:text-7xl font-bold mb-8">
					Contact Me
				</h2>
				<p className="text-lg md:text-xl my-6 mx-6 md:w-1/2">
					I'm currently searching for a an internship position for
					Summer 2025 or a full time position in 2026. Please feel
					free to contact me through email and I will respond as soon
					as I can!
				</p>
				<a href="mailto:milesbernstein48@gmail.com" className="my-6">
					<button
						type="button"
						class="px-4 py-2 border rounded-lg hover:bg-gray-100 hover:text-blue-700 bg-gray-800 border-gray-700 text-white hover:text-white hover:bg-gray-700 ease-out duration-200"
					>
						Send An Email!
					</button>
				</a>
			</div>
		</section>
	);
};

export default Contact;
