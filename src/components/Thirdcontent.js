import firstpic from "./pictures/IMG_7743_2-removebg-preview.png";
import secpic from "./pictures/gg-removebg-preview.png";
import thirdpic from "./pictures/IMG_0741_new-removebg-preview.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Pic3svg } from "../components/pictures/IMG_0741_new-removebg-preview.svg";
import { ReactComponent as Pic1svg } from "../components/pictures//IMG_7743_2-removebg-preview.svg";
import { ReactComponent as Pic2svg } from "../components/pictures/gg-removebg-preview.svg";
import { easeIn, motion, useSpring, Animated } from "framer-motion";

const thirdcontent = (props) => {
	var settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div id="About" className="w-full h-auto bg-gray-900 pb-40">
			<div className="w-1/2 lg:w-10/12 md:w-full sm:w-full xs:w-full  h-full pb-10 bg-gray-900 grid  xl:grid-cols-1 grid-cols-1  justify-items-center items-center text-4xl font-extrabold tracking-widest font-lilitaOne text-yellow-500   shadow-slate-500 xl:pt-10 relative  lg:ml-36 lg:justify-items-center xl:w-10/12">
				<motion.div
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.4, duration: 0.8 },
					}}
					initial={{ opacity: 0, y: -100 }}
					viewport={{ once: false, amount: 0.5 }}
					className="relative w-full   grid justify-items-center items-center
		 h-10 mt-28 font-Preahvihear text-7xl uppercase"
				>
					{" "}
					About Me
				</motion.div>
				<div className="w-10/12 h-full bg-transparent relative grid grid-flow-row grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 justify-items-center items-center justify-center pt-10 gap-32  lg:grid-flow-row  mr-36	 xs:mr-36">
					<div className="    bg-transparent  w-full  h-full xl:w-full xl:h-10/12 lg:w-full lg:h-10/12  md:w-1/2 md:h-3/4 shadow-lg sm:w-3/4 sm:h-3/4 xs:w-3/4 xs:h-3/4 ">
						<motion.div
							whileInView={{
								opacity: 1,
								x: 0,
								rotate: 0,
								transition: { delay: 0.3, duration: 0.5 },
							}}
							initial={{ opacity: 0, x: -100, rotate: 50 }}
							viewport={{ once: false, amount: 0.3 }}
							className="w-full	 h-auto border-r-4 border-t-4 border-orange-800 relative rounded-lg shadow-md shadow-orange-500 bg-transparent xl:w-3/4 top-10"
						>
							<motion.div
								whileInView={{
									opacity: 1,
									x: 0,
									rotate: 0,
									transition: { delay: 0.3, duration: 0.7 },
								}}
								initial={{ opacity: 0, x: 100, rotate: -50 }}
								viewport={{ once: true, amount: 0.3 }}
								className="w-3/4 h-3/4 bg-transparent sm:mr-72  mt-10 ml-48  border-r-4 border-t-4 border-solid border-orange-900 shadow-xl shadow-orange-700 absolute rounded-lg xl:w-10/12 xl:h-10/12"
							></motion.div>
							<Slider {...settings} className="relative  ">
								<div className="  relative bg-transparent">
									<Pic1svg className="  w-10/12 h-10/12  xs:h-3/4 xs:mt-20 absolute fill-current xs:ml-16 ml-28 mb-72  bg-transparent" />
									<img
										src={firstpic}
										alt="jasperito"
										className="relative  bg-transparent "
									></img>
								</div>
								<div className="relative ">
									<Pic2svg className="w-10/12 absolute fill-current ml-28 mb-72" />
									<img
										src={secpic}
										alt="jasperito"
										className="relative bg-transparent"
									></img>
								</div>

								<div className="relative">
									<Pic3svg className="w-10/12 absolute  fill-current ml-28 mb-72 " />
									<img
										src={thirdpic}
										alt="jasperito"
										className="relative bg-transparent"
									></img>
								</div>
							</Slider>
						</motion.div>
					</div>
					<motion.div
						whileInView={{
							opacity: 1,
							x: 0,
							rotate: 0,
							transition: { delay: 0.3, duration: 0.6 },
						}}
						initial={{ opacity: 0, x: 100, rotate: 30 }}
						viewport={{ once: false, amount: 0.3 }}
						className=" bg-transparent  w-[90%] h-[auto] shadow-lg xl:shadow-orange-700 hover:shadow-2xl hover:shadow-yellow-500 xs:shadow-orange-600 lg:shadow-orange-600 md:shadow-orange-700 sm:shadow-orange-800 rounded-lg grid grid-cols-1 text-lg text-white  tracking-wider font-light items-center justify-items-center relative pb-10 font-sans lg:w-full  ml-36  transition duration-500 top-16"
					>
						<motion.div
							whileInView={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.3, duration: 0.7 },
							}}
							initial={{ opacity: 0, x: 100 }}
							viewport={{ once: false, amount: 0.5 }}
							className="w-10/12 h-auto leading-2 relative my-12  items-center justify-items-stretch font-Preahvihear font-light tracking-wider text-justify text-[80%] 	 "
						>
							My name is Jasper Bergantinos. I am passionate in designing
							websites and develop front-end stuffs. Outside from the tech
							industry, I am also passionate in dancing. It is where I developed
							my character and discipline. I am an outgoing person but I am
							selective in making friends with others. I also love pets, but I
							don't own one.
						</motion.div>
						<div
							className="w-full h-3/4 grid text-center text-white	
 lg:grid-cols-1 md:grid-cols-1  xs:grid-cols-1 xs:gap-3 font-Preahvihear relative xl:grid-cols-2"
						>
							<motion.div
								whileInView={{
									opacity: 1,

									transition: { delay: 0.5, duration: 0.8 },
								}}
								initial={{ opacity: 0 }}
								viewport={{ once: false, amount: 0.5 }}
								className="text-yellow-500  "
							>
								Name
								<div className=" text-slate-100 text-sm w-full h-full">
									{props.person.name}
								</div>
							</motion.div>
							<motion.div
								whileInView={{
									opacity: 1,

									transition: { delay: 0.5, duration: 1.2 },
								}}
								initial={{ opacity: 0 }}
								viewport={{ once: false, amount: 0.5 }}
								className="text-yellow-500 "
							>
								Phone
								<div className=" text-slate-100 text-sm">
									{props.person.contact}
								</div>
							</motion.div>
							<motion.div
								whileInView={{
									opacity: 1,

									transition: { delay: 0.5, duration: 1.6 },
								}}
								initial={{ opacity: 0 }}
								viewport={{ once: false, amount: 0.5 }}
								className=" text-yellow-500"
							>
								country
								<div className=" text-slate-100 text-sm">
									{props.person.country}
								</div>
							</motion.div>
							<motion.div
								whileInView={{
									opacity: 1,

									transition: { delay: 0.5, duration: 2 },
								}}
								initial={{ opacity: 0 }}
								viewport={{ once: false, amount: 0.5 }}
								className="text-yellow-500"
							>
								email
								<div className=" text-slate-100  text-[12px] lg:text-[10px] ">
									{props.person.email}
								</div>
								{"	 "}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default thirdcontent;
