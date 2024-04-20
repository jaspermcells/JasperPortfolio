import React from "react";
import { ReactComponent as Webdesignicon } from "./pictures/reshot-icon-pen-tool-LCMSVR8HBE.svg";
import { ReactComponent as Brandingicon } from "./pictures/reshot-icon-digital-marketing-LBRZ9M6K5S.svg";
import { ReactComponent as Uiicon } from "./pictures/reshot-icon-user-QLCUYJBKM3.svg";
import { motion, useMotionValue, useScroll } from "framer-motion";
const FourthContent = () => {
	return (
		<div className="grid grid-flow-row w-full h-auto pb-72  bg-gray-900 text-white relative top-0 ">
			<div className="w-full h-full grid text-center justify-self-center mt-20">
				<div className=" tracking-widest font-semibold text-7xl font-Preahvihear uppercase mb-20  ">
					{" "}
					My Services
				</div>

				<div className="grid grid-flow-row    grid-cols-3 lg:grid-cols-3  xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 l justify-self-center w-10/12 gap-6 ">
					<motion.div
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { delay: 0.3, duration: 0.6 },
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						viewport={{ once: false, amount: 0.4 }}
						className="w-full rounded-sm bg-gray-800 grid justify-items-center gap-8  group  hover:cursor-pointer"
					>
						<Webdesignicon className="rounded-full  border-orange-900 text-center border-2 w-16 h-16 mt-10  group-hover:animate-bounce " />{" "}
						<div className="uppercase  text-yellow-600 font-Preahvihear font-semibold text-left w-3/4 relative right-4  text-3xl top-4 tracking-widest">
							Landing Page
						</div>
						<div className="w-10/12 mb-20 text-justify font-sans font-thin leading-tight relative bottom-4">
							I create landing pages for small time business with visually
							appealing user interface. I make sure that it is responsive for
							different screensize,thus it is avaible in different gadgets. It
							involves different section like homepage, about page,
							products/services page and contact page and etc. In this way, I
							can showcase what your customers need to know about your business.
							I integrate it with calendly for flawlessly booking with your
							customer.
						</div>
					</motion.div>
					<motion.div
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { delay: 0.5, duration: 0.6 },
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						viewport={{ once: false, amount: 0.4 }}
						className="w-full rounded-sm bg-gray-800  grid justify-items-center gap-8 group  hover:cursor-pointer"
					>
						<Brandingicon className="rounded-full  border-orange-900 text-center border-2  w-16 h-16 mt-10 group-hover:animate-bounce" />
						<div className="uppercase  text-yellow-600 font-Preahvihear font-semibold text-left w-3/4  relative right-4 text-3xl top-4 tracking-widest	">
							Custom Web Design{" "}
						</div>
						<div className="w-10/12 mb-20 text-justify font-sans font-thin leading-tight relative bottom-4">
							I create personalized design tailored to reflect the client's
							brand identity, vision, and target audience.Custom web development
							refers to the process of creating a website or web application
							tailored specifically to meet the unique requirements and
							objectives of a business or individual client.
						</div>
					</motion.div>
					<motion.div
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { delay: 0.7, duration: 0.8 },
						}}
						initial={{ opacity: 0, scale: 0.5 }}
						viewport={{ once: false, amount: 0.4 }}
						className="w-full rounded-sm bg-gray-800 grid justify-items-center gap-8 group  hover:cursor-pointer"
					>
						<Uiicon className="rounded-full border-orange-900 border-2 w-14 h-14 mt-10  group-hover:animate-bounce " />{" "}
						<div className="uppercase  text-yellow-600 font-Preahvihear font-semibold text-left w-3/4 relative right-4 text-3xl top-4 tracking-widest">
							UI/UX Design
						</div>
						<div className="w-10/12 mb-20 text-justify font-sans font-thin leading-tight relative bottom-4">
							I create basic web design that is visually appealing and with
							intuitive user interfaces which align with the client's brand and
							target audience.Improving usability, accessibility, and overall
							user satisfaction through user-centered design practices.Creating
							wireframes and prototypes to visualize the website's layout,
							navigation, and user flow.
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FourthContent;
