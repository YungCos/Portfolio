import React from "react";
import Icon from "./Icon";

const Skills = () => {
	const technologies = [
		{
			logo: "haskell",
			name: "Haskell",
		},
		{
			logo: "html",
			name: "HTML",
		},
		{
			logo: "css",
			name: "CSS",
		},
		{
			logo: "js",
			name: "JavaScript",
		},
		{
			logo: "java",
			name: "Java",
		},
		{
			logo: "c",
			name: "C",
		},
		{
			logo: "cs",
			name: "C#",
		},
		{
			logo: "python",
			name: "Python",
		},
		{
			logo: "elixir",
			name: "Elixir",
		},
		{
			logo: "react",
			name: "React",
		},
		{
			logo: "angular",
			name: "Angular",
		},
		{
			logo: "sql",
			name: "SQL",
		},
		{
			logo: "aws",
			name: "AWS",
		},
		{
			logo: "gc",
			name: "Google Cloud",
		},
		{
			logo: "docker",
			name: "Docker",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 p-6 rounded-lg shadow-md m-20">
			{technologies.map((skill) => (
				<div
					key={skill.logo}
					className="block p-2 bg-white border border-gray-200 rounded-lg shadow bg-gray-700 flex justify-center items-center space-x-2 m-1"
				>
					<Icon name={skill.logo} color="#000000" size={40} />
					<p className="text-xl font-semibold">{skill.name}</p>
				</div>
			))}
		</div>
	);
};

export default Skills;
