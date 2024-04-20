import React, { useRef, useTransform } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";
const ProjectsCard = (props) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: "",
		offset: ["0 1", "0.7 1.5"],
	});
	return (
		<div className="">
			<motion.div
				ref={ref}
				style={{ scale: scrollYProgress, opacity: scrollYProgress }}
				className="card lg:card-side bg-gradient-to-r from-slate-700 via-zinc-800 to-slate-800 shadow-xl   "
			>
				<figure>
					<img
						src={props.src}
						alt="Album"
						className="w-[100%]  h-[90%] hover:scale-[130%]  transition-transform duration-500 ease-in-out"
					/>
				</figure>
				<div className="card-body w-[150%] h-full flex flex-cols-1 justify-start items-start text-start relative">
					<h2 className="card-title w-full h-full relative xs:w-3/4 sm:w-1/4 md:w-1/4 lg:w-full xl:w-full text-4xl top-6 pr-10">
						{" "}
						{props.title}
					</h2>
					<p className="lg:text-[50%] xl:text-[30%] text-[30%] md:text-[30%] sm:text-[30%] xs:text-[30%] text-slate-200 lowercase font-light leading-6 relative top-12 text-justify font-Preahvihear w-full xl:w-full lg:w-full md:w-[60%]   sm:w-[60%]  xs:w-[60%] pb-28 h-auto  ">
						{props.projectdesc}
					</p>
					<div className="card-actions justify-right xl:w-full lg:w-full md:w-3/4 sm:w-3/4 xs:w-3/4 h-auto text-lg pr-14 ">
						<div className="badge badge-outline">{props.tags[0]}</div>
						<div className="badge badge-outline">{props.tags[1]}</div>
						<div className="badge badge-outline">{props.tags[2]}</div>
						<div className="badge badge-outline">{props.tags[3]}</div>
					</div>

					<div className="card-actions justify-end">
						<button className="btn btn-secondary relative">Live</button>
						<button className="btn btn-primary relative">Code</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectsCard;
