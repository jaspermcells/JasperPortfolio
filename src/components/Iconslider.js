import React from "react";
import iconc from "./pictures/iconc.svg";
import iconcss from "./pictures/iconcss.svg";
import iconhtml from "./pictures/iconhtml.svg";
import icontailwind from "./pictures/icontailwind.svg";
import iconjava from "./pictures/iconjava.svg";
import iconjavascript from "./pictures/iconjavascript.svg";
import iconreact from "./pictures/iconreact.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	useMotionTemplate,
	useMotionValue,
	motion,
	animate,
} from "framer-motion";
const Iconslider = () => {
	var settings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true, // Enable center mode
		variableWidth: false,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="grid items-center align-center grid-cols-1 text-yellow-500 text-center mt-10 mb-10 ">
			<h1 className="text-5xl uppercase font-Preahvihear tracking-wide text-slate-100 ml-4 text-7xl">
				Tech Stack
			</h1>
			<div class="hidden lg:block xl:block ">
				<Slider
					{...settings}
					className="relative grid items-center align-center  justify-center lg:w-[70%] lg:w-[70%] h-[200%] lg:left-[16%]  xl:left-[15%] md: mt-10 "
				>
					{" "}
					<div className="slick-slide   relative  ">
						<div
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.3, duration: 0.8 },
							}}
							initial={{ opacity: 0, x: 50 }}
							viewport={{ once: false, amount: 0.5 }}
							className="icon grid justify-center bg-transparent w-1/2 m-0 "
						>
							<img src={iconc} alt="Icon 1" className="w-20 h-20 " />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								C++
							</h1>
						</div>
					</div>
					<div className="slick-slide relative ">
						<div className="icon grid justify-center bg-transparent w-1/2 m-0">
							<img src={iconcss} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								CSS
							</h1>
						</div>
					</div>
					<div className=" slick-slide relative">
						<div className="icon  grid justify-center bg-transparent w-1/2 m-0">
							<img src={iconhtml} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								HTML
							</h1>
						</div>
					</div>
					<div className=" slick-slide relative">
						<div className="icon  grid justify-center bg-transparent w-1/2 m-0">
							<img src={icontailwind} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								Tailwind
							</h1>
						</div>
					</div>
					<div className=" slick-slide relative">
						<div className="icon grid justify-center bg-transparent w-1/2 m-0">
							<img src={iconjava} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								Java
							</h1>
						</div>
					</div>
					<div className=" slick-slide relative">
						<div className="icon  grid justify-center  bg-transparent w-1/2 m-0">
							<img src={iconjavascript} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500  tracking-wide text-md">
								{" "}
								Javascript
							</h1>
						</div>
					</div>
					<div className=" slick-slide relative">
						<div className="icon  grid justify-center bg-transparent w-1/2 m-0">
							<img src={iconreact} alt="Icon 1" className="w-20 h-20" />
							<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
								{" "}
								React
							</h1>
						</div>
					</div>
				</Slider>
			</div>
			<div class=" lg:hidden xl:hidden grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-center text-center  xs:gap- sm:gap-5 md:gap-4 md:left-52 mt-10 md:w-1/2 w-full xs:w-full sm:w-full  relative ">
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconc} alt="Icon 1" className="w-20 h-20" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						C++
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconcss} alt="Icon 1" className="w-20 h-20" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						CSS
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconhtml} alt="Icon 1" className="w-20 h-20" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						HTML
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={icontailwind} alt="Icon 1" className="w-20 h-20 ml-2" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide ">
						{" "}
						Tailwind
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconjava} alt="Icon 1" className="w-20 h-20" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						Java
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconjavascript} alt="Icon 1" className="w-20 h-20 ml-4" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						Javascript
					</h1>
				</motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="icon  grid justify-center bg-transparent w-1/2 m-0"
				>
					<img src={iconreact} alt="Icon 1" className="w-20 h-20" />
					<h1 className="font-bold mt-2 text-center font-Preahvihear hover:scale-150  transition-transform duration-300 ease-in-out text-yellow-500 text-2xl tracking-wide">
						{" "}
						React
					</h1>
				</motion.div>
			</div>
		</div>
	);
};

export default Iconslider;
