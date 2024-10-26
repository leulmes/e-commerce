import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
require("dotenv").config();

const Navbar = () => {
	return (
		<div className="flex flex-row bg-black text-white sticky top-0 z-50">
			<div className="cursor-pointer">
				<Link href={`${process.env.SITE_URL}/`}>
					<Image src="/hs-image.png" width="100" height="100" alt="logo" />
				</Link>
			</div>
			<div className="flex flex-row gap-[1250px] items-center">
				<div className="cursor-pointer flex flex-row gap-4 items-center">
					<h1>Services</h1>
					<h1>Gallery</h1>
					<h1>About</h1>
					<Link href={`${process.env.SITE_URL}/shop`}>
						<h1>Shop</h1>
					</Link>
					<h1>Book Now</h1>
				</div>
				<div className="flex flex-row gap-3">
					<ShoppingCart className="absolute" size={25} />
					<div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 relative left-5 bottom-3">
						<div className="text-sm">6</div>
					</div>
					{/* <h4 className="font-bold font-sans">Cart</h4> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
