import React from "react";
import ProjectsCard from "./ProjectsCard";
import todolistWebsite from "./pictures/to-doListWebsite.PNG";
import coffeeWebsite from "./pictures/coffeewebsite.PNG";
const Projects = () => {
	const projectdesCoffee =
		"I created a client-side coffee shop website. I used reactJS framework and TailwindCSS for faster approach of development. I used framer-motion for the animation features of the webpage. I also used DaisyUI and materialUI. I created this webpage because I like to drink coffee most of the time. ";
	const projectdesTodo =
		"This is a simple project. It is a To-do list webpage in which I used localstorage to store my data. Hence, data are still available even if i turnoff my desktop. It has update and delete features. And also, you can sort data by their name or by the deadline of the task they set. It is a good way to manipulate and practice handling data in localstorage.  ";

	const projectTitleCoffee = "Don Juanito Coffeeshop";
	const projectTitleTodo = "To do List";
	const projectCoffeeTags = [
		"Coffee",
		"Landing Page",
		"ReactJS",
		"TailwindCSS",
	];
	const projectTodoTags = ["localstorage", "Sorting", "ReactJS", "TailwindCSS"];
	return (
		<div
			id="Projects"
			className=" lg:w-[60%] xl:w-[60%] xs:w-[80%] h-full text-5xl grid justify-center text-center items-center font-Preahvihear uppercase text-yellow-400 gap-12 justify-items-center  relative "
		>
			<h1 className="mb-10 text-slate-100 mt-40 text-7xl"> Projects</h1>
			<ProjectsCard
				projectdesc={projectdesTodo}
				src={todolistWebsite}
				title={projectTitleTodo}
				tags={projectTodoTags}
			/>
			<ProjectsCard
				projectdesc={projectdesCoffee}
				src={coffeeWebsite}
				title={projectTitleCoffee}
				tags={projectCoffeeTags}
			/>
		</div>
	);
};

export default Projects;
