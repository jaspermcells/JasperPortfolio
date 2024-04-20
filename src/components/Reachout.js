import React, { useRef, useTransform } from "react";
import { motion, useMotionValue, useScroll } from "framer-motion";
const Reachout = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: "",
		offset: ["0 1", "1.33 1.5"],
	});
	return (
		<div className="w-screen h-screen bg-slate-900  sticky top-0">
			<div className="w-screen h-[90%] grid justify-center items-center text-center justify-items-center relative pb-40">
				<motion.h1
					ref={ref}
					style={{ scale: scrollYProgress, opacity: scrollYProgress }}
					className="w-screen font-Preahvihear h-full bg-transparent relative text-yellow-600 text-[250px] xl:text-[200px] lg:text-[250px] md:text-[300px] sm:text-[200px] xs:text-[150px] text-center grid items-center justify-items-center justify-center "
				>
					Reach Out
				</motion.h1>
			</div>
		</div>
	);
};

export default Reachout;
