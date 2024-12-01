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
	const burgerLine = `bg-black w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;
	const toggleSheet = () => {
		setOpen(!open);
	};

	const toggleBurgerMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		console.log("burgerState: ", isOpen);
	}, [isOpen]);

	return (
		<div className="flex flex-col bg-white ">
			<div className="flex flex-row items-center h-20 sticky overscroll-x-contain">
				<button
					className="group cursor-pointer ml-4"
					onClick={() => toggleBurgerMenu()}
				>
					<div className="grid justify-items-center">
						<div
							className={`${burgerLine}
							${isOpen ? "rotate-45 translate-y-[4.2px]" : ""}`}
						></div>
						<div className={`${burgerLine} ${isOpen ? "opacity-0" : ""}`}></div>
						<div
							className={`${burgerLine}
							${isOpen ? "-rotate-45 -translate-y-[4.2px]" : ""}`}
						></div>
					</div>
				</button>
				<h1 className="text-lg mx-auto">Second Bloom</h1>
				<User className="size-4 mr-1" />
				<ShoppingCart className=" size-4 mr-4" />
			</div>
			<input
				type="text"
				placeholder="Search for Second Hand Clothing"
				className="border border-gray-700 rounded-2xl px-3 py-2 mb-3 w-11/12 mx-auto"
			></input>
		</div>
	);
};

export default Navbar;
