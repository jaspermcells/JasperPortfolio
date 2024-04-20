import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "../components/pictures/logo.svg";
import { Link } from "react-scroll";
import "../index.css";

const Navbar = () => {
	const option = ["Home", "About", "Resume", "Pojects", "Hire Me"];

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(option[0]);
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
					? "  shadow-2xl drop-shadow-2xl border-yellow-700 text-yellow-600 fixed z-50 bg-gradient-to-r from-slate-700 via-zinc-800 to-slate-900 w-screen"
					: "text-yellow-500 border-yellow-200  fixed z-50 bg-transparent w-screen"
			}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center ">
					<img
						width={200}
						height={200}
						fill="blue"
						src={logo}
						className="h-10 w-10 bounce-animation bg-yellow-400 rounded-3xl z-50 mr-3"
						alt="Flowbite Logo"
					/>

					<span className="self-center text-2xl font-black whitespace-nowrap  font-Preahvihear uppercase tracking-widest ">
						Portfolio
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
					aria-controls="navbar-dropdown"
					aria-expanded="false"
					onClick={toggleDropdown}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				{/*		{isOpen && (  */}
				<div
					className={
						isOpen
							? " absolute  z-50 right-0 mt-[152px] w-full h-20 shadow-lg md:hidden ease-in-out  duration-500 "
							: "transform fixed left-[-60%] translate-x-[-100%] ease-out duration-500 bg-white"
					}
				>
					<div div className=" bg-black  text-white shadow-xs">
						<div
							className="py-1 w-[60%] h-screen  bg-slate-900 fixed grid "
							role="menu"
							aria-orientation="vertical"
						>
							<div className="h-1/2  ">
								{option.map((option) => (
									<button
										key={option}
										onClick={() => handleOptionSelect(option)}
										className="block px-4 py-2 text-md text-slate-200 hover:bg-gray-300 hover:text-yellow-600 font-semibold w-full font-Poppins text-left h-1/4 ease-in-out duration-500 "
										role="menuitem"
									>
										{option}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				{/*	)} */}
				<div
					className="hidden w-full md:block md:w-auto "
					id="navbar-dropdown  "
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
						<Link to="Home">
							<li className=" pr-5">
								<a
									href="#"
									className={
										isScrolled
											? "block py-2 px-2  text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 font-bold duration-300 hover:text-yellow-500"
											: "block py-2 px-2  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
									}
								>
									Home
								</a>
							</li>
						</Link>
						<Link to="About">
							<li className="  pr-5">
								<a
									href="#"
									className={
										isScrolled
											? "block py-2 px-2  text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
											: "block py-2 px-2  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
									}
								>
									About
								</a>
							</li>
						</Link>
						<Link to="Resume">
							<li className="pr-5">
								<a
									href="#"
									className={
										isScrolled
											? "block py-2 px-2  text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
											: "block py-2 px-2  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
									}
								>
									Resume
								</a>
							</li>
						</Link>
						<Link to="Projects">
							<li className="pr-5">
								<a
									href="#"
									className={
										isScrolled
											? "block py-2 px-2  text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
											: "block py-2 px-2  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
									}
								>
									Projects
								</a>
							</li>
						</Link>
						<Link to="HireMe">
							<li className="pr-5">
								<a
									href="#"
									className={
										isScrolled
											? "block py-2 px-2  text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:scale-110 duration-300 hover:text-yellow-500 font-bold"
											: "block py-2 px-2  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 font-bold"
									}
								>
									Hire Me
								</a>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
