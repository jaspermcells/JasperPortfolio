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
						className="carousel-item w-[100%]  grid justify-center items-center justify-items-center "
					>
						<motion.div
							ref={ref}
							style={{ scale: scrollYProgress, opacity: scrollYProgress }}
							className="card md:w-[70%] xs:w-[90%] pb-3 h-auto grid justify-center  bg-base-100 shadow-xl bg-gradient-to-r from-slate-700 via-zinc-800 to-slate-800   "
						>
							<figure className="w-full h-full grid justify-center items-center justify-items-center">
								<img src={item.src} alt="Shoes" />
							</figure>
							<div className="card-body  text-center grid justify-center justify-items-center">
								<h2 className="card-title lg:text-[80%] relative  leading-9 tracking-tight  text-yellow-600  w-auto">
									{item.title}
								</h2>
								<p className=" text-left md:text-[25%] sm:text-[23%] xs:text-[22%]  lg:tracking-wide md:tracking-normal xs:tracking-tight text-slate-200 font-sans    relative md:w-[85%] sm:w-[85%]   grid justify-center  lowercase   h-auto leading-1 xs:leading-5 mt-5  font-normal">
									{" "}
									{item.projectdesc}
								</p>
								<div className="card-actions justify-end relative xs:top-[40%] lg:top-[150%] md:bottom-[80%]  ">
									{item.tags.map((item, index) => (
										<div
											className={
												index % 2 === 0
													? " badge badge-outline text-blue-400 md:text-[25%] sm:text-[23%] xs:text-[18%]"
													: "badge badge-outline text-pink-400 md:text-[25%] sm:text-[23%] xs:text-[18%]"
											}
										>
											{" "}
											{item}
										</div>
									))}
								</div>
								<div className="xs:mt-2 md:mt-5 top-[40%] relative right-[6%] grid grid-cols-2 justify-end justify-items-end  items-start justify-self-end  sm:w-[40%]  xs:w-[50%] h-7">
									<button className="text-white  uppercase border-pink-800 hover:ring-offset-2 ring-2  ring-blue-600 ring-offset-blue-500 h-full rounded-lg  relative   md:text-[24%] sm:text-[23%] xs:text-[22%] lg:w-[60%]  sm:w-[60%] xs:w-[70%] ">
										{" "}
										Live
									</button>
									<button className=" text-white  uppercase ring-2  ring-pink-600 hover:ring-offset-2 ring-offset-pink-500 h-full rounded-lg relative   xl:right-7 lg:right-5 md:right-5 sm:right-4 xs:right-0 md:text-[24%] sm:text-[23%] xs:text-[22%]  lg:w-[60%] sm:w-[60%]  xs:w-[70%] ">
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
