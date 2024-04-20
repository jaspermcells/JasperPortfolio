import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
const Card = ({ title, description }) => {
	return (
		<div className="border bg-green-500 rounded-lg p-4 shadow-md transition duration-300 hover:shadow-lg">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2">{description}</p>

			<div class="group">
				<button class="bg-blue-500 hover:bg-blue-700">Button 1</button>
			</div>

			<div class="group">
				<button class="bg-red-500 hover:bg-red-700">Button 2</button>
			</div>
		</div>
	);
};

export default Card;
