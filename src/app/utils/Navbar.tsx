"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useContext } from "react";
import ItemCountContext from "@/itemCountContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
	const { itemCount, open, setOpen } = useContext(ItemCountContext);
	const [isOpen, setIsOpen] = useState(false);
	const burgerLine = `bg-black w-8 h-[1px] my-1 rounded transition ease transform duration-300`;
	const toggleSheet = () => {
		setOpen(!open);
	};

	const toggleBurgerMenu = () => {
		setIsOpen(!isOpen);
	}

	

	useEffect(() => {
		console.log("burgerState: ", isOpen);
	}, [isOpen]);

	return (
		<div className="bg-white h-20 sticky">
			<div className="flex flex-row gap-5 items-center">
				{/* <h1 className="text-white">Find Vintage.</h1>
				<ShoppingCart
					className="cursor-pointer  text-white"
					size={25}
					onClick={() => toggleSheet()}
				/> */}
				{/* "group cursor-pointer border-white border-2 pt-2 pb-2 pl-4 pr-4" */}
				<button className='group cursor-pointer ' onClick={() => toggleBurgerMenu()}>
					<div className="grid justify-items-center">
						<div className={
							`${burgerLine}
							${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`
						}></div>
						<div className={`${burgerLine} ${isOpen ? 'opacity-0' : ''}`}></div>
						<div className={
							`${burgerLine}
							${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`
						}></div>
					</div>
				</button>
				<h1>Second Bloom</h1>
			</div>
			{/* "bg-white w-8 h-[1px] rounded group-hover:scale-x-0 transition" */}
			{/* "bg-white w-8 h-[1px] rounded transition group-hover:-rotate-45 group-hover:-translate-y-[7px]" */}
			{/* "bg-white w-8 h-[1px] rounded transition group-hover:rotate-45 group-hover:translate-y-[7px]" */}
			{/* <div className="cursor-pointer">
				<Link href={"/"}>
					<Image src="/hs-image.png" width="100" height="100" alt="logo" />
				</Link>
			</div> */}
			{/* <div className="flex flex-row gap-[1330px] items-center">
				<div className="cursor-pointer flex flex-row gap-4 items-center">
					<h1>Services</h1>
					<h1>Gallery</h1>
					<h1>About</h1>
					<Link href={"/shop"}>
						<h1>Shop</h1>
					</Link>
					<h1>Book Now</h1>
				</div>

				<div className="flex flex-row gap-7 items-center">
					<ShoppingCart
						className="cursor-pointer absolute"
						size={25}
						onClick={() => toggleSheet()}
					/>
					<div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 relative left-5 bottom-3">
						<div className="text-sm">{itemCount}</div>
					</div>
					

					<SignedOut>
						
						<SignInButton>
							<User className="cursor-pointer" size={25} />
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div> */}
		</div>
	);
};

export default Navbar;
