"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { OAuthStrategy } from "@clerk/types";
import { useSignIn, useSignUp } from "@clerk/nextjs";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const SignIn = () => {
	const { signIn } = useSignIn();
	const { signUp, setActive } = useSignUp();

	if (!signIn || !signUp) return null;

	const signInWith = (strategy: OAuthStrategy) => {
		return signIn.authenticateWithRedirect({
			strategy,
			redirectUrl: "/sso-callback",
			redirectUrlComplete: "/",
		});
	};

	async function handleSignIn(strategy: OAuthStrategy) {
		if (!signIn || !signUp) return null;

		// If the user has an account in your application, but does not yet
		// have an OAuth account connected to it, you can transfer the OAuth
		// account to the existing user account.
		const userExistsButNeedsToSignIn =
			signUp.verifications.externalAccount.status === "transferable" &&
			signUp.verifications.externalAccount.error?.code ===
				"external_account_exists";

		if (userExistsButNeedsToSignIn) {
			const res = await signIn.create({ transfer: true });

			if (res.status === "complete") {
				setActive({
					session: res.createdSessionId,
				});
			}
		}

		// If the user has an OAuth account but does not yet
		// have an account in your app, you can create an account
		// for them using the OAuth information.
		const userNeedsToBeCreated =
			signIn.firstFactorVerification.status === "transferable";

		if (userNeedsToBeCreated) {
			const res = await signUp.create({
				transfer: true,
			});

			if (res.status === "complete") {
				setActive({
					session: res.createdSessionId,
				});
			}
		} else {
			// If the user has an account in your application
			// and has an OAuth account connected to it, you can sign them in.
			signInWith(strategy);
		}
	}

	return (
		<div className="flex items-center justify-center h-screen ">
			<Card className="w-[400px] h-[500px] shadow-2xl rounded-xl">
				<CardHeader className="flex items-center justify-center">
					<CardTitle>Sign in to vintage.</CardTitle>
					<CardDescription>Welcome! Please sign in to continue</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center justify-center">
					<button
						className="flex gap-3 items-center justify-center border rounded-lg py-1 px-4 shadow-sm w-[70%] hover:bg-gray-100"
						onClick={() => handleSignIn("oauth_google")}
					>
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

				<div className="flex flex-col pl-5 pr-5 pb-5">
					<label className="text-sm text-gray-600 pb-1 pl-1">
						Email address
					</label>
					<input className="border rounded-lg py-1 px-4 shadow-sm"></input>
					<button className="border rounded-lg py-2 px-4  shadow-sm hover:bg-gray-100 mt-8 text-sm">
						Continue
					</button>
				</div>

				<CardFooter className="flex flex-col items-center justify-center">
					<label className="text-sm text-gray-600 ">
						Don't have an account?
						<Link href="/sign-up">
							<label className="font-bold cursor-pointer"> Sign up</label>
						</Link>
					</label>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignIn;
