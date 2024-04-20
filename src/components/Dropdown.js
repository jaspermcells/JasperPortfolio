// src/components/Dropdown.js
import React, { useState } from "react";

const Dropdown = ({ options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<div>
				<span className="rounded-md shadow-sm">
					<button
						onClick={toggleDropdown}
						type="button"
						className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
						id="options-menu"
						aria-haspopup="true"
						aria-expanded="true"
					>
						{selectedOption}
						<svg
							className="-mr-1 ml-2 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</span>
			</div>
			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
					<div className="rounded-md bg-white shadow-xs">
						<div
							className="py-1"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							{options.map((option) => (
								<button
									key={option}
									onClick={() => handleOptionSelect(option)}
									className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
									role="menuitem"
								>
									{option}
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
