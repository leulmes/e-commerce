import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
const SignIn = () => {
	return (
		<div className="flex items-center justify-center h-screen ">
			<Card className="w-[400px] h-[500px] shadow-xl">
				<CardHeader className="flex items-center justify-center">
					<CardTitle>Sign in to vintage.</CardTitle>
					<CardDescription>
						Welcome! Please sign in to continue
					</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center justify-center">
					<button className="flex gap-3 items-center justify-center border rounded-lg py-1 px-4 shadow-sm w-[70%] hover:bg-gray-100">
						<FcGoogle className="text-lg" />
						<p className="text-sm text-gray-600 font-medium">
							Continue with Google
						</p>
					</button>
				</CardContent>
				<div className="relative flex py-5 items-center justify-center ">
					<div className="w-32 border-t border-gray-200"></div>
					<span className="flex-shrink mx-4 text-gray-400">or</span>
					<div className="w-32 border-t border-gray-200"></div>
				</div>
				<CardFooter className="flex items-center justify-center">
					<p>Don't have an account? Sign Up</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignIn;
