import React from "react";

const MyWork = () => {
	const projects = [
		{
			link: "https://yourport.tech/",
			img: "/assets/images/yourport.png",
			title: "YourPortfolio",
			description: `
        A full stack app developped as a team of two.
        YourPortfolio uses AI to create a resume that
        is tailored to the job posting you are applying for.`,
		},
		{
			link: "https://odarling.itch.io/forgotten-city",
			img: "/assets/images/forgottencity.png",
			title: "Forgotten City",
			description: `
        A co-op puzzle platformer game developped
        using the Unity engine and C#. Co-operated
        with a team of 11 students to design and
        build a video game in three months`,
		},
		{
			link: "https://yourscope-we.web.app/",
			img: "/assets/images/yourscope.png",
			title: "YourScope",
			description: `
       A full stack app developped as a team of five.
       YourScope provides students with a course planner,
       an events tracker, and an internal job board for students
       looking to find work early`,
		},
		{
			link: "https://yungcos.github.io/MonteCarloUTTT/",
			img: "/assets/images/uttt.png",
			title: "Ultimate Tic Tac Toe",
			description: `
        A web-based implementation of ultimate tic tac toe, with singleplayer and local multiplayer. Developed and optimized an AI for ultimate tic tac toe using Monte Carlo tree search`,
		},
		{
			link: "https://github.com/YungCos/UTSC-Seat-Sonar",
			img: "/assets/images/seatsonar.png",
			title: "Seat Sonar",
			description: `
        Discord bot developped using discord.py, which notifies you when a seat is availble for a tutorial. Seat Sonar uses a webscraper to check when a seat is avilable`,
		},
		{
			link: "https://github.com/YungCos/Python-War-Game/blob/main/main.py",
			img: "/assets/images/war.png",
			title: "War Card Game",
			description: `
        Python implementation of the classic card game "War" with a graphical user interface (GUI) built using Tkinter. Served as the final project for ICS4U`,
		},
	];

	return (
		<section
			id="work"
			className="bg-gradient-to-r from-red-700 via-yellow-700 to-emerald-700 pb-20"
		>
			<div className="container mx-auto text-center p-4">
				<h2 className="text-7xl font-extrabold p-20">My Work</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<a href={project.link} key={index}>
							<div className="job-card border rounded-lg shadow bg-gray-800 border-gray-700">
								<img
									className="rounded-t-lg"
									src={project.img}
									alt=""
								/>
								<div className="m-5">
									<h5 className="mb-2 text-2xl font-bold tracking-tight">
										{project.title}
									</h5>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
										{project.description}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyWork;
