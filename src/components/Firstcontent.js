import React, { useEffect, useState } from "react";

import iconfb from "./pictures/reshot-icon-facebook-square-GCAE9R73J5.svg";
import iconig from "./pictures/reshot-icon-instagram-DM5FP6S9N2.svg";
import icongoogle from "./pictures/reshot-icon-google-U3H6LWBGDC.svg";
import icongithub from "./pictures/reshot-icon-github-NY46M9DGFU.svg";
import iconlinkedin from "./pictures/reshot-icon-linkedin-G7YJ8FXBKT.svg";

import { motion } from "framer-motion";

const Firstcontent = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const icons = [iconfb, iconig, icongoogle, icongithub, iconlinkedin];
	// Create an effect that listens for scroll events
	useEffect(() => {
		// Function to update the state based on scroll position
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Attach the scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Cleanup: Remove the scroll event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<motion.div
			id="Home"
			className="w-full h-screen bg-transparent  grid grid-flow-col justify-items-center font-lilitaOne mt-28 "
		>
			<div className="text-white mt-10 bg-transparent w-full h-auto grid grid-flow-row grid-row-6   ">
				<motion.div
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, x: 50 }}
					viewport={{ once: true, amount: 0.5 }}
					className="bg-transparent  relative xl:left-[23%] lg:left-[16%]   md:left-[20%] text-center  pt-5 h-5  lg:text-4xl md:text-3xl xs:text-2xl sm:text-3xl  text-yellow-400 font-semibold xs:justify-self-center sm:justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start justify-self-center font-Preahvihear tracking-widest xs:text-center top-4 xs:top-[45%]"
				>
					{" "}
					Hello!
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.3, duration: 0.6 },
					}}
					initial={{ opacity: 0, y: 100 }}
					viewport={{ once: true, amount: 0.3 }}
					className=" grid bg-transparent relative  xl:left-[20%] lg:left-[10%] md:left-[20%] xs:left-[-2%]  xl:justify-self-start lg:justify-self-start md:justify-self-start xs:justify-self-center sm:justify-self-center sm:text-center xs:text-center  xl:text-[400%] lg:text-[350%] md:text-[300%] sm:text-[300%] xs:text-[250%]   font-extrabold z-50 font-Preahvihear leading-tight  w-1/2 "
				>
					{" "}
					I am Jasper Bergantinos
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						x: 0,
						transition: { delay: 0.5, duration: 0.6 },
					}}
					initial={{ opacity: 0, x: -20 }}
					viewport={{ once: true, amount: 1 }}
					className="bg-transparent w-[70%]   xl:left-[20%] lg:left-[10%] md:left-[20%]  xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center text-yellow-400 font-Preahvihear tracking-wide text-lg lg:text-base md:text-[80%] sm:text-[75%]  xs:text-[65%] xs:text-yellow-500  xl:text-left lg:text-left md:text-left sm:text-left xs:text-justify  leading-6 relative bottom-8 	xs:bottom-[40%]"
				>
					{" "}
					Mabuhay!! Welcome to my website portfolio. I am a frontend developer
					from the Philippines and I love to develop the UI interface of the
					website.
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.3, duration: 0.6 },
					}}
					initial={{ opacity: 0, y: -100 }}
					viewport={{ once: true, amount: 1 }}
					className="bg-slate-700 rounded-2xl xl:left-[3%] lg:left-[-6%] md:left-[-0%]  grid justify-items-center items-center align-items-center  justify-self-center justify-stretch h-1/2   border-yellow-600 border-2 w-[65%] relative bottom-20 xl:w-[65%] lg:w-[60%] xs:bottom-[100%]"
				>
					{" "}
					<ul className="grid grid-cols-6 justify-center justify-items-center items-center text-center  w-full left-10 relative   ">
						{icons.map((key) => (
							<li className="xs:w-10/12  grid justify-center justify-items-center z-50">
								<a href=" https://www.facebook.com/jasper.bergantinos">
									<img
										alt="fb"
										src={key}
										className="w-8 h-6 lg:h-6 lg:w-6 sm:w-5 sm:h-5 xs:w-4  hover:animate-bounce  relative right-3 "
									></img>
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Firstcontent;
