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
		<div id="Resume" className="relative h-screen w-full bg-white grid">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover bg-green-200 filter contrast-[140%] brightness-[90%] grayscale	text-white"
				autoPlay
				loop
				muted
				src={videobg}
			>
				<source type="video/mp4" alt="not playing" />
				Your browser does not support the video tag.
			</video>
			<div className="grid justify-center items-center text-center w-full h-full">
				<div className="absolute top-0 lg:left-[190px] xl:left-[190px] md:left-[12%] sm:left-[0%] xs:left-[0%] lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full h-full font-extrabold font-Preahvihear  mix-blend-difference tracking-wide text-[100px] sm:text-[80px] xs:text-[400%] lg:text-[120px]  text-yellow-300 grid justify-center items-center text-center uppercase  ">
					Download CV now!
					<div className="mix-blend-normal">
						<button
							className="bg-gray-300   lg:w-[30%] xl:w-[30%] xs:w-[200px] md:w-[28%] p-2  lg:left-[35%] md:left-[35%] sm:left-[35%] xs:left-[27%] relative  rounded-sm lg:text-5xl xl:text-6xl grid justify-center items-center hover:bg-blue-900  border-black text-red-600 xs:text-4xl  md:text-4xl bottom-10 "
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
