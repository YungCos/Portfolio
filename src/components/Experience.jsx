import React from "react";
import Skills from "./Skills";

const Experience = () => {
	const jobs = [
		{
			logo: "/assets/images/thescore.png",
			role: "Software Developer Co-Op",
			company: "theScore",
			dates: "Sep 2024 - Present",
			description: [
				"Using Elixir and Pheonix LiveView to build internal applications for theScore Bet and ESPN bet",
			],
		},
		{
			logo: "/assets/images/tribalscale.jfif",
			role: "Agile Software Engineer Co-Op",
			company: "TribalScale",
			dates: "Jan 2024 - Apr 2024",
			description: [
				"Engineered custom software solutions using a tech stack of React, NodeJS and Postgres.",
				"Tailored software to client needs with RESTful APIs and serverless architecture",
				"Crafted intuitive and responsive user interfaces across various projects for multiple clients",
			],
		},
		{
			logo: "/assets/images/dbrsmorningstar.jfif",
			role: "Software Engineer Co-Op",
			company: "DBRS Morningstar",
			dates: "Jan 2023 - Apr 2023",
			description: [
				"Collaborated with developers from around the world to engineer and maintain credit rating software",
				"Developed and maintained various APIs and microservices to enhance performance and load times by 50%",
				"Optimized a web application by fixing bugs and eliminating redundancy",
				"Managed with live SQL databases to ensure queries are efficient and data is integrated correctly",
			],
		},
		{
			logo: "/assets/images/alphacoding.jfif",
			role: "Coding Instructor",
			company: "Alpha Coding",
			dates: "Mar 2022 - Jan 2023",
			description: [
				"Lead two classes of students every week through new python concepts and projects",
				"Developed compelling lesson plans each week for each class, which fit the abilities of each student",
			],
		},
	];

	return (
		<section id="experience" className="py-20 bg-gray-900">
			<div className="container mx-auto text-center">
				<h2 className="text-7xl font-extrabold mb-8">
					Work Experience
				</h2>
				<div className="container mx-auto flex flex-row justify-center">
					<ul
						aria-label="User feed"
						role="feed"
						className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 "
					>
						{jobs.map((job, index) => (
							<li
								role="article"
								className="relative pl-12"
								key={index}
							>
								<div className="flex flex-col flex-1 gap-4">
									<div className="absolute z-10 inline-flex items-center justify-center w-12 h-12 text-white rounded-full -left-6 ring-2 ring-white">
										<img
											src={job.logo}
											className="max-w-full rounded-full"
										/>
									</div>
									<h4 className="text-left flex flex-col items-start text-2xl font-bold leading-8 lg:items-center md:flex-row text-white pt-2">
										<span className="flex-1">
											{job.role}
											<span className="text-xl font-bold bg-clip-text text-gray-400">
												{" @ " + job.company}
											</span>
										</span>
										<span className="text-lg font-normal text-gray-400">
											{" " + job.dates}
										</span>
									</h4>
									<ul className="list-disc text-left">
										{job.description.map((point, index) => (
											<li key={index}>{point}</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experience;
