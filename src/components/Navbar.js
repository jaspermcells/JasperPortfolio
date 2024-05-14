import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../components/pictures/logo.svg";

import "../index.css";
import svgclose from "./pictures/svgclose.svg";

const Navbar = () => {
	const option = ["Home", "About", "Resume", "Projects", "Hire Me"];
	var [isActive, SetisActive] = useState([false, false, false, false, false]);

	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [navbarVisible, setNavbarVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			if (currentScroll > 0) {
				// Scroll down
				setNavbarVisible(false);
			} else {
				// Scroll up
				setNavbarVisible(true);
			}

			setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	const navbarRef = useRef(null);
	let counter = 0.4;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(option[0]);
	const targetRef = useRef(null);
	const variant = {
		active: {
			scale: 1.2,
			opacity: 1,
		},
		inactive: {
			scale: 1,
			opacity: 0.75,
		},
	};
	const handleSelect = (index) => {
		const updatedSetisActive = isActive.map((item, idx) => {
			return idx === index ? !item : false;
		});
		SetisActive(updatedSetisActive);
	};

	const [isScrolled, setIsScrolled] = useState(false);
	function scrollDetect() {
		var lastScroll = 0;

		window.onscroll = function () {
			let currentScroll =
				document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

			if (currentScroll > 0 && lastScroll <= currentScroll) {
				lastScroll = currentScroll;
				setIsScrolled(isScrolled);
			} else {
				lastScroll = currentScroll;
				setIsScrolled(isScrolled);
			}
		};
	}

	scrollDetect();
	// Create an effect that listens for scroll events

	const handleClickServices = (option) => {
		const element = document.getElementById(option);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			ref={navbarRef}
			className={` w-full transition-transform duration-300  shadow-2xl drop-shadow-2xl border-yellow-700 text-yellow-900 fixed  top-0 bg-gradient-to-r from-zinc-900 via-slate-700 to-slate-800  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 z-50 
			
					`}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center ">
					<img
						windexth={200}
						height={200}
						fill="blue"
						src={logo}
						className="h-10 w-10 bounce-animation bg-yellow-400 rounded-3xl z-50 mr-3"
						alt="Flowbite Logo"
					/>

					<span className="self-center text-2xl font-black whitespace-nowrap  font-Preahvihear uppercase tracking-widest text-yellow-600 ">
						Portfolio
					</span>
				</div>
				<button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 fixed focus:outline-none focus:ring-2 focus:ring-gray-200   right-6"
					aria-controls="navbar-dropdown"
					aria-expanded="false"
					onClick={toggleDropdown}
				>
					{isOpen}
					<motion.svg
						className={
							isOpen
								? "w-5 h-5 hidden  opacity-0 translate-x-4 duration-200 delay-75 transition "
								: "visible opacity-100 translate-x-0 duration-200 delay-75 transition "
						}
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-windexth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</motion.svg>
					<img
						src={svgclose}
						alt="closesvg"
						className={
							isOpen
								? "visible transition opacity-100 translate-x-0 duration-200 delay-75 "
								: "hidden transition opacity-0 translate-x-6 duration-200 delay-75 "
						}
					></img>
				</button>
				{/*		{isOpen && (  */}
				<motion.div
					className={
						isOpen
							? " absolute   right-0 mt-[152px] w-[60%] h-20 shadow-lg md:hindden  "
							: " hidden transform relative left-100 opacity-0   transition ease-out duration-500   "
					}
				>
					<div div className=" bg-black  text-white shadow-xs">
						<div
							className="py-1 w-[60%] h-screen  bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 
fixed grid z-0  "
							role="menu"
							aria-orientation="vertical"
						>
							<div className="h-1/2   ">
								{option.map((option) => {
									let currentIndex = counter; // Store the current value of counter in a variable
									counter += 0.2;
									return (
										<motion.button
											whileInView={{
												opacity: 1,
												x: 0,
												transition: { duration: currentIndex },
											}}
											initial={{ opacity: 0, x: 100 }}
											viewport={{ once: false, amount: 0.5 }}
											key={option}
											onClick={() => handleClickServices(option)}
											className="block px-4 py-2 text-md text-slate-200 hover:bg-gray-300 hover:text-yellow-600 font-semibold w-full font-Poppins text-left h-1/4   "
											role="menuitem"
										>
											{option}
										</motion.button>
									);
								})}
							</div>
						</div>
					</div>
				</motion.div>
				{/*	)} */}
				<div
					className="hidden w-full md:block md:w-auto "
					index="navbar-dropdown  "
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent font-Preahvihear">
						{option.map((option, index) => {
							return (
								<motion.li
									onClick={() => handleClickServices(option)}
									className={
										isActive[index]
											? "text-yellow-600 font-Preahvihear"
											: "text-slate-200 font-Preahvihear"
									}
									variants={variant}
									animate={isActive[index] ? "active" : "inactive"}
								>
									{" "}
									<div
										className={
											isScrolled
												? "block py-2 px-2   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
												: "block py-2 px-2   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
										}
									>
										{option}
									</div>
								</motion.li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
