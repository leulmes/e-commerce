import { SignIn } from "@clerk/nextjs";

export default function SignInComponent() {
	return (
		<div className="flex items-center justify-center h-screen">
			<SignIn />
		</div>
	);
}
