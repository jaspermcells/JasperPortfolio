import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const HireMe = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: "",
		offset: ["0 1", "1.33 1.5"],
	});
	return (
		<div
			id="HireMe"
			className=" w-sceen h-screen grid justify-center items-center justify-items-center bg-zinc-900 sticky top-0 pb-40"
		>
			<div className="w-screen h-screen grid justify-center items-center justify-items-center bg-transparent">
				<motion.h1
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: { delay: 0.5, duration: 0.8 },
					}}
					initial={{ opacity: 0, scale: 0 }}
					viewport={{ once: false, amount: 1 }}
					ref={ref}
					className="w-auto h-auto grid text-center text-[200px] items-center font-Preahvihear font-bold uppercase bg-transparent text-slate-100 relative  z-50 pb-[72] "
				>
					Hire Me
				</motion.h1>
			</div>
		</div>
	);
};

export default HireMe;
