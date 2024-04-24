import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../components/pictures/logo.svg";
import { Link } from "react-scroll";
import "../index.css";
import svgclose from "./pictures/svgclose.svg";
const Navbar = () => {
	const option = ["Home", "About", "Resume", "Projects", "Hire Me"];
	var [isActive, SetisActive] = useState([false, false, false, false, false]);

	let counter = 0.8;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(option[0]);
	const [isScrolled, setIsScrolled] = useState(false);
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

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};
	return (
		<nav
			className={
				isScrolled
					? "  shadow-2xl drop-shadow-2xl border-yellow-700 text-yellow-600 fixed z-50 bg-gradient-to-r from-slate-700 via-zinc-800 to-slate-900 w-full"
					: "text-yellow-500 border-yellow-200  fixed z-50 bg-transparent w-screen"
			}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center ">
					<img
						windexth={200}
						height={200}
						fill="blue"
						src={logo}
						className="h-10 w-10 bounce-animation bg-yellow-400 rounded-3xl z-50 mr-3"
						alt="Flowbite Logo"
					/>

					<span className="self-center text-2xl font-black whitespace-nowrap  font-Preahvihear uppercase tracking-windexest ">
						Portfolio
					</span>
				</a>
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
							className="py-1 w-[60%] h-screen  bg-slate-900 fixed grindex "
							role="menu"
							aria-orientation="vertical"
						>
							<div className="h-1/2  ">
								{option.map((option) => {
									let currentIndex = counter; // Store the current value of counter in a variable
									counter += 0.2;
									return (
										<Link to={option}>
											<motion.button
												whileInView={{
													opacity: 1,
													x: 0,
													transition: { duration: currentIndex },
												}}
												initial={{ opacity: 0, x: 100 }}
												viewport={{ once: false, amount: 0.5 }}
												key={option}
												onClick={() => handleOptionSelect(option)}
												className="block px-4 py-2 text-md text-slate-200 hover:bg-gray-300 hover:text-yellow-600 font-semibold w-full font-Poppins text-left h-1/4   "
												role="menuitem"
											>
												{option}
											</motion.button>
										</Link>
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
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
						{option.map((option, index) => {
							return (
								<Link to={option}>
									<motion.li
										onClick={() => handleSelect(index)}
										className={
											isActive[index] ? "text-yellow-600" : "text-slate-200"
										}
										variants={variant}
										animate={isActive[index] ? "active" : "inactive"}
									>
										{" "}
										<a
											href="#"
											className={
												isScrolled
													? "block py-2 px-2   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
													: "block py-2 px-2   rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
											}
										>
											{option}
										</a>
									</motion.li>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
