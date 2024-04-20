import React from "react";
import { InlineWidget, PopupButton } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";
const Scheduling = () => {
	return (
		<div
			id="HireMe"
			className=" w-full h-auto pb-72 bg-transparent grid justify-center "
		>
			{" "}
			<div className=" w-full h-auto  bg-transparent grid justify-center items-center justify-items-center text-center my-20">
				<motion.h1
					whileInView={{
						opacity: 1,

						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					className=" font-Preahvihear mx-10
					 uppercase text-[400%] text-white mb-40 relative w-3/4 text-justify leading-[-40px] tracking-0 top-40 h-1/2 right-4 "
				>
					{" "}
					Schedule{" "}
					<p className=" relative bottom-10">
						{" "}
						a{" "}
						<motion.p
							whileInView={{
								scale: 1,

								transition: { delay: 0.3, duration: 0.8 },
							}}
							initial={{ scale: 0 }}
							viewport={{ once: false, amount: 0.3 }}
							className=" text-yellow-500 text-[90%] relative bottom-[90px] left-16"
						>
							{" "}
							meeting{" "}
						</motion.p>{" "}
					</p>
					<p className="relative bottom-40 left-0 xl:tracking-widest lg:tracking-widest md:tracking-widest sm:tracking-wider ">
						with me{" "}
					</p>
				</motion.h1>

				<div className=" p-4 pb-0 align-items-center h-[130%] overflow-hidden xl:block lg:block md:block sm:hidden xs:hidden text-4xl text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 font-Preahvihear py-2 w-auto grid justify-center items-center content-center text-center justify-items-center relative rounded-lg uppercase ">
					<PopupButton
						url="https://calendly.com/jasperbergantinos3/project-discussion"
						text="Click here to schedule!"
						rootElement={document.getElementById("root")}
					></PopupButton>
				</div>
				<div className=" xl:hidden lg:hidden md:hidden sm:block xs:block text-4xl text-white bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 font-Preahvihear py-2 w-3/4 grid justify-center items-center text-center justify-items-center relative rounded-lg uppercase right-4 bottom-24 ">
					<PopupButton
						url="https://calendly.com/jasperbergantinos3/project-discussion"
						text="Click here to schedule!"
						rootElement={document.getElementById("root")}
					></PopupButton>
				</div>
			</div>
		</div>
	);
};

export default Scheduling;
