"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const EyeToggle = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => {
        console.log("yee");
        setShowPassword(!showPassword);
    }
	return (
		<div className="cursor-pointer">
			<button onClick={() => togglePassword()} className="flex items-center justify-center bg-slate-100 w-6 h-4 p-1 border rounded-md hover:bg-gray-200">
                {showPassword ? <EyeOff className="w-3 h-3"/> : <Eye className="w-3 h-3"/>}
            </button>
		</div>
	);
};

export default EyeToggle;
