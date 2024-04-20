import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = ["Text 1", "Text 2", "Text 3"]; // Array of texts to animate

const TextAnimator = () => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 2000); // Change text every 2 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<AnimatePresence>
				<motion.div
					key={currentTextIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<h1>{texts[currentTextIndex]}</h1>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default TextAnimator;
