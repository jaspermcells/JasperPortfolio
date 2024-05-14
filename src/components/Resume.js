import React from "react";
import videobg from "./pictures/videobg.mp4";
const Resume = () => {
	const handleDownload = () => {
		const fileId = "1dViHuwCh7SBH6uuONAW3BLqNbjHrYrFe"; // Replace with your Google Drive file ID
		const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

		// Create a temporary link element
		const link = document.createElement("a");
		link.href = downloadUrl;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		document.body.appendChild(link);

		// Trigger the click event on the link
		link.click();

		// Clean up
		document.body.removeChild(link);
	};

	return (
		<div id="Resume" className="relative h-auto w-screen bg-black grid">
			<video
				className="relative top-0 left-0 w-screen h-screen object-cover bg-green-200 filter contrast-[140%] brightness-[90%] grayscale	text-white"
				autoPlay
				loop
				muted
				src={videobg}
			>
				<source type="video/mp4" alt="not playing" />
				Your browser does not support the video tag.
			</video>
			<div className="grid justify-center items-center text-center w-full h-full">
				<div className="absolute  lg:left-[250px] xl:left-[360px]  md:left-[12%] sm:left-[0%] xs:left-[-2%] lg:w-1/2 xl:w-1/2 md:w-3/4 sm:w-full xs:w-full h-full font-extrabold font-Preahvihear   text-[100px] sm:text-[80px] xs:text-[400%] lg:text-[120px] tracking-tighter  text-yellow-300 grid justify-center items-center justify-items-center justify-self-center text-center uppercase  top-[0%] leading-12  ">
					<div className="">
						<div className="mix-blend-difference">Download CV now!</div>
						<button
							className=" lg:w-[30%] xl:w-[25%] xs:w-[200px] md:w-[30%] p-2  lg:left-[37%] md:left-[35%] sm:left-[35%] xs:left-[30%] relative   lg:text-4xl xl:text-4xl py-5 grid justify-center items-center hover:contrast-125  text-yellow-600 xs:text-4xl  md:text-4xl bottom-[400%] justify-self-center top-3 px-0 tracking-normal animate-bounce accent-amber-700 bg-transparent  outline-black ring-2 outline-offset-0 ring-offset-white ring-black rounded-3xl border-black drop-shadow-xl backdrop-blur-lg backdrop-brightness-100 backdrop-hue-rotate-180"
							onClick={handleDownload}
						>
							Click me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
