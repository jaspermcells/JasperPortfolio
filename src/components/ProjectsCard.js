import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
const ProjectsCard = ({ data }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: "",
		offset: ["0 1", "0.7 1.5"],
	});

	return (
		<div className=" w-full  relative bottom-16 ">
			<p className=" text-2xl italic text-yellow-500">Swipe! </p>
			<div className="w-[100%] z-50 h-[40%] carousel rounded-box  ">
				{data.map((item) => (
					<div
						key={item.id}
						className="carousel-item w-[100%] h-[200%] grid justify-center items-center justify-items-center "
					>
						<motion.div
							ref={ref}
							style={{ scale: scrollYProgress, opacity: scrollYProgress }}
							className="card w-full h-[120%] grid justify-center  bg-base-100 shadow-xl bg-gradient-to-r from-slate-700 via-zinc-800 to-slate-800    "
						>
							<figure className="w-full h-3/4 grid justify-center items-center justify-items-center">
								<img src={item.src} alt="Shoes" />
							</figure>
							<div className="card-body text-left">
								<h2 className="card-title text-[80%] relative bottom-14 leading-9 tracking-tight  text-yello-600 ">
									{item.title}
								</h2>
								<p className="text-[35%] text-yellow-300 font- leading-5">
									{" "}
									{item.projectdesc}
								</p>
								<div className="card-actions justify-end relative bottom-10">
									{item.tags.map((item, index) => (
										<div
											className={
												index % 2 === 0
													? " badge badge-outline text-blue-400"
													: "badge badge-outline text-pink-400"
											}
										>
											{" "}
											{item}
										</div>
									))}
									<button className="btn btn-primary relative top-4">
										{" "}
										Live
									</button>
									<button className="btn btn-secondary relative top-4">
										Code
									</button>
								</div>
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectsCard;
