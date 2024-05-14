import React, { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Firstcontent from "./components/Firstcontent";
import Secondcontent from "./components/Secondcontent";
import Thirdcontent from "./components/Thirdcontent";
import Fourthcontent from "./components/FourthContent";

import Iconslider from "./components/Iconslider";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Scheduling from "./components/Scheduling";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import darkbg from "./components/pictures/darkbg.jpg";
import Reachout from "./components/Reachout";
import {
	useMotionTemplate,
	useMotionValue,
	motion,
	animate,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import HireMe from "./components/HireMe";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function App() {
	const color = useMotionValue(COLORS_TOP[0]);

	useEffect(() => {
		animate(color, COLORS_TOP, {
			ease: "easeInOut",
			duration: 10,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, [color]);
	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

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
	const aboutMe = {
		name: "Jasper Bergantinos",
		contact: "09451547044",
		country: "Philippines",
		email: "jasperbergantinos3@gmail.com",
	};

	return (
		<React.Fragment>
			<div className="bg-transparent w-full h-screen  relative grid grid-cols-1 m-0 p-0  pb-10  ">
				<Navbar />
				<motion.div
					style={{
						backgroundImage,
					}}
					className=" w-screen bg-slate-200 grid xl:grid-flow-col xl:grid-cols-2  md:grid-flow-col sm:grid-flow-row xs:grid-flow-row md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:grid-flow-col grid-cols-2 drop-shadow-2xl shadow-orange-800  
					 "
				>
					<Firstcontent />
					<Secondcontent />
					<div className="absolute inset-0 z-0">
						<Canvas>
							<Stars radius={50} count={2500} factor={4} fade speed={2} />
						</Canvas>
					</div>
				</motion.div>
				<div className="w-full h-full ">
					<Thirdcontent person={aboutMe} />
				</div>
				<div className="w-screen bg-zinc-900 grid justify-center items-center justify-items-center text-center  sticky text-white text-2xls">
					<Resume />

					<Iconslider />

					<Projects />
				</div>
				<Fourthcontent />
				<Reachout />
				<HireMe />
				<Banner />
				<footer className="text-[25px] text-white text-center  font-lilitaOne tracking-wider grid justify-center items-center justify-items-center h-9 ">
					<div> &#169;Jasper Bergantinos</div>
				</footer>
			</div>
		</React.Fragment>
	);
}

export default App;
