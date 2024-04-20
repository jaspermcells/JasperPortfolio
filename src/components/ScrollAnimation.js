import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const ScrollAnimation = () => {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

	return (
		<div className="h-screen flex justify-center items-center">
			<motion.div
				className="w-64 h-64 bg-blue-500 rounded-full"
				style={{ scale }}
			/>
		</div>
	);
};

export default ScrollAnimation;
