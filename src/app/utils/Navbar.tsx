"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import ItemCountContext from "@/itemCountContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
	const { itemCount } = useContext(ItemCountContext);
	const [openSheet, setOpenSheet] = useState(false);

	const toggleSheet = () => {
		setOpenSheet(!openSheet);
	};

	useEffect(() => {
		console.log("cart selected: ", openSheet);
	});

	return (
		<div className="flex flex-row bg-black text-white sticky top-0 z-50">
			<div className="cursor-pointer">
				<Link href={"/"}>
					<Image src="/hs-image.png" width="100" height="100" alt="logo" />
				</Link>
			</div>
			<div className="flex flex-row gap-[1250px] items-center">
				<div className="cursor-pointer flex flex-row gap-4 items-center">
					<h1>Services</h1>
					<h1>Gallery</h1>
					<h1>About</h1>
					<Link href={"/shop"}>
						<h1>Shop</h1>
					</Link>
					<h1>Book Now</h1>
				</div>

				
				<div className="flex flex-row gap-3">
					<ShoppingCart
						className="cursor-pointer absolute"
						size={25}
						onClick={() => toggleSheet()}
					/>
					<div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 relative left-5 bottom-3">
						<div className="text-sm">{itemCount}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
