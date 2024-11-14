import React from "react";
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
			<Card className="w-[500px] h-[500px] shadow-xl">
				<CardHeader className="flex items-center justify-center">
					<CardTitle>Sign in to VintageScholar</CardTitle>
					<CardDescription>Your 1 stop shop for vintage college clothing!</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center justify-center">
					<button className="bg-black text-white"> Google </button>
				</CardContent>
				<CardFooter className="flex items-center justify-center">
					<p>Don't have an account? Sign Up</p>
				</CardFooter>
			</Card>
			
		</div>
	);
};

export default SignIn;
