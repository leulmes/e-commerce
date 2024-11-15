"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordProps {
	displayEye: boolean;
	setDisplayEye: (value: boolean) => void;
	inputType: string;
	setInputType: (value: string) => void;
}
const EyeToggle = ({
	displayEye,
	setDisplayEye,
	inputType,
	setInputType,
}: PasswordProps) => {
	const toggleEye = () => {
		setDisplayEye(!displayEye);
		setInputType(inputType === "password" ? "text" : "password");
	};
	return (
		<div className="cursor-pointer">
			<button
				onClick={() => toggleEye()}
				className="flex items-center justify-center bg-slate-100 w-7 h-5 p-1 border rounded-md hover:bg-gray-200"
			>
				{displayEye ? (
					<EyeOff className="w-4 h-4" />
				) : (
					<Eye className="w-4 h-4" />
				)}
			</button>
		</div>
	);
};

export default EyeToggle;
