"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, ChevronRight } from "lucide-react";
import { useContext } from "react";
import ItemCountContext from "@/itemCountContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "motion/react";
const ShoppingBag02Icon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
	  <path d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z" stroke="currentColor" strokeWidth="1.5" />
	  <path d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8" stroke="currentColor" strokeWidth="1.5" />
	  <path d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
  );

  

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

	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 1],
			},
		},
	};
	useEffect(() => {
		console.log("burgerState: ", isOpen);
	}, [isOpen]);

	return (
		<div className="flex flex-col bg-white">
			<div className="flex flex-row items-center h-14 sticky overscroll-x-contain">
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
				<User className="size-5 mr-1"/>
				{/* <ShoppingCart className=" size-4 mr-4" /> */}
				<ShoppingBag02Icon className=" size-5 mr-4" />
				<hr></hr>
			</div>
			<AnimatePresence>
				{isOpen ? (
					<div className="relative">
						<motion.div
							variants={menuVars}
							initial="initial"
							animate="animate"
							exit="exit"
							className="bg-white absolute w-screen h-screen scroll-smooth origin-top"
						>
							<div className="mt-7 ml-4 text-3xl">
								<ul className="mb-7 cursor-pointer">
									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>T-Shirts</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>

									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>Sweaters & Hoodies</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>

									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>Jackets & Outerwear</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>
									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>Accessories</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>
									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>Bottoms</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>
									<li className="mb-4">
										<div className="flex flex-row items-center">
											<h1>Kids</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</div>
									</li>
									<li className="mb-4">
										<Link href="/shop" className="flex flex-row items-center" onClick={() => toggleBurgerMenu()}>
											<h1>Shop</h1>
											<ChevronRight className="size-7 ml-auto mr-3" />
										</Link>
									</li>
								</ul>
							</div>

							<hr></hr>
							<div className="mt-4 ml-4 text-lg">
								<ul>
									<li className="mb-4">Sustainability</li>
									<li className="mb-4">Wishlist</li>
									<li className="mb-4">Can we help you?</li>
									<li className="mb-4">+ 1.866.BLOOM</li>
								</ul>
							</div>
						</motion.div>
					</div>
				) : (
					""
				)}
			</AnimatePresence>

			<input
				type="text"
				placeholder="Search for Second Hand Clothing"
				className="border border-gray-700 rounded-2xl px-3 py-2 mb-3 w-11/12 mx-auto"
			></input>
		</div>
	);
};

export default Navbar;
