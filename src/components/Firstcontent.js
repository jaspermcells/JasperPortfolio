import React, { useEffect, useState } from "react";

import iconfb from "./pictures/reshot-icon-facebook-square-GCAE9R73J5.svg";
import iconig from "./pictures/reshot-icon-instagram-DM5FP6S9N2.svg";
import icongoogle from "./pictures/reshot-icon-google-U3H6LWBGDC.svg";
import icongithub from "./pictures/reshot-icon-github-NY46M9DGFU.svg";
import iconlinkedin from "./pictures/reshot-icon-linkedin-G7YJ8FXBKT.svg";

import { motion } from "framer-motion";

const Firstcontent = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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
					className="bg-transparent lg:ml-32 relative md:left-10 text-center leading-5 pt-5 h-5  lg:text-4xl md:text-3xl xs:text-2xl sm:text-3xl  text-yellow-400 font-semibold xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center font-Preahvihear tracking-widest"
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
					className={
						isScrolled
							? " grid bg-transparent lg:ml-32 md:ml-10 lg:text-7xl  sm:text-4xl  xs:text-4xl md:text-[340%]  font-extrabold z-50 xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center font-Preahvihear justify-center  md:py-18 h-auto xs:left-0  xl:left-0 lg:left-0 md:left-0 sm:left-0 relative xl:w-3/4 xs:w-3/4  lg:w-3/4 md:w-full sm:w-full xl:text-left lg:text-left md:text-left  sm:text-center  xs:text-center"
							: " grid bg-transparent lg:ml-32 md:ml-10 lg:text-7xl  sm:text-4xl  xs:text-4xl md:text-[340%]  font-extrabold z-50 xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center font-Preahvihear justify-center  md:py-18 h-auto xs:left-0  xl:left-0 lg:left-0 md:left-0 sm:left-0 relative xl:w-3/4 xs:w-3/4  lg:w-3/4 md:w-full sm:w-full xl:text-left lg:text-left md:text-left  sm:text-center  xs:text-center"
					}
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
					className="bg-transparent w-[70%] lg:ml-32 md:ml-10 ml-32 xs:ml-0 font-thin xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center text-yellow-400 font-Preahvihear tracking-wider text-lg lg:text-base  xs:text-sm xs:text-yellow-500  xl:text-left lg:text-left md:text-left sm:text-left xs:text-justify  leading-6 relative bottom-8 "
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
					className="bg-slate-700 rounded-2xl  grid justify-items-center items-center align-items-center  justify-self-center justify-stretch h-1/2   border-yellow-600 border-2 w-[65%] relative bottom-20"
				>
					{" "}
					<ul className="grid grid-cols-6 justify-center justify-items-center items-center text-center  w-full left-10 relative   ">
						<li className="xs:w-10/12  grid justify-center justify-items-center z-50">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={iconfb}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 hover:animate-bounce  "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12 grid justify-center justify-items-center z-50">
							<a href=" https://www.instagram.com/_jaspermcells/">
								<img
									alt="fb"
									src={iconig}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 hover:animate-bounce "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12 grid justify-center justify-items-center z-50">
							<a href="https://mail.google.com/mail/?view=cm&fs=1&to=jasperbergantinos3@gmail.com ">
								<img
									alt="fb"
									src={icongoogle}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 hover:animate-bounce "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12 grid justify-center justify-items-center z-50">
							<a href="https://github.com/jaspermcells">
								<img
									alt="fb"
									src={icongithub}
									className="w-8 h-8 lg:w-8 lg:h-8  sm:w-5 sm:h-5 hover:animate-bounce "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12  grid justify-center justify-items-center z-50">
							<a href=" https://www.linkedin.com/in/jas-permcells-a912452a7/">
								<img
									alt="fb"
									src={iconlinkedin}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5  hover:animate-bounce  "
								></img>
							</a>
						</li>
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Firstcontent;
