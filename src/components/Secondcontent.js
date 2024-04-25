import React from "react";
import myphoto from "./pictures/IMG_0741-removebg-preview.png";
import newmyphoto from "./pictures/IMG_0741_new-removebg-preview.png";
import { motion } from "framer-motion";
const secondcontent = () => {
	return (
		<motion.div>
			<motion.div
				whileInView={{
					opacity: 1,
					x: 0,
					transition: { delay: 0.3, duration: 0.8 },
				}}
				initial={{ opacity: 0, x: 50 }}
				viewport={{ once: true, amount: 0.5 }}
				className="text-white bg-transparent z-50 w-full grid relative justify-items-center xl:bottom-[-20%] lg:bottom-[-20%] md:bottom-[-20%] xs:bottom-24 "
			>
				<img
					src={newmyphoto}
					width={400}
					height={300}
					alt="jasper"
					className="z-50 
					"
				></img>{" "}
				<motion.div
					whileInView={{
						opacity: 1,
						y: 0,
						rotate: 45,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, y: 50, rotate: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					className="bg-yellow-400 w-40 h-72 absolute rounded-full mb-72 shadow-2xl  shadow-orange-400"
				></motion.div>
				<motion.div
					whileInView={{
						opacity: 1,
						y: 0,
						rotate: 45,
						transition: { delay: 0.3, duration: 0.8 },
					}}
					initial={{ opacity: 0, y: -50, rotate: 90 }}
					viewport={{ once: false, amount: 0.5 }}
					className="bg-orange-400 w-20 h-64 absolute rounded-full mt-56  shadow-2xl shadow-yellow-400 "
				></motion.div>
			</motion.div>
		</motion.div>
	);
};

export default secondcontent;
