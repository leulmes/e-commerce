"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useContext } from "react";
import ItemCountContext from "@/itemCountContext";
import CartSheet from "../utils/CartSheet";

type Product = {
	name: string;
	image: string;
	price: number;
	placedInCart: boolean;
};

const product1: Product = {
	name: "New Balance 550 Shoes",
	image: "/shoes1.jpg",
	price: 109.99,
	placedInCart: false,
};
const product2: Product = {
	name: "New Balance 550 Shoes",
	image: "/shoes1.jpg",
	price: 109.99,
	placedInCart: false,
};
const product3: Product = {
	name: "New Balance 550 Shoes",
	image: "/shoes1.jpg",
	price: 109.99,
	placedInCart: false,
};
const product4: Product = {
	name: "New Balance 550 Shoes",
	image: "/shoes1.jpg",
	price: 109.99,
	placedInCart: false,
};

const ShopPage = () => {
	const products: Product[] = [
		product1,
		product2,
		product3,
		product4,
		product1,
		product2,
		product3,
		product4,
	];
	const { itemCount, setItemCount } = useContext(ItemCountContext);

	const incrementItemCount = (product: Product) => {
		console.log("adding to cart: ", product.name);
		if (!product.placedInCart) {
			// item not in cart yet, add it
			setItemCount(itemCount + 1);
			product.placedInCart = true;
		}
	};

	useEffect(() => {
		console.log("items added to cart: ", itemCount);
	}, [itemCount]);

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
            <CartSheet />
			<div className="grid grid-cols-4 gap-4 px-8 py-8">
				{products.map((product, index) => {
					return (
						<Card className="w-60 shadow-lg" key={index}>
							<CardHeader>
								<CardTitle>
									<img
										src={`${product.image}`}
										height={"100%"}
										width={"100%"}
										alt="image"
									></img>
								</CardTitle>
								<CardDescription>{product.name}</CardDescription>
							</CardHeader>
							<CardContent>${product.price}</CardContent>
							<CardFooter className="">
								<button
									className="rounded-md border-2 border-black px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-bold"
									onClick={() => incrementItemCount(product)}
								>
									Add to Cart
								</button>
							</CardFooter>
						</Card>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default ShopPage;
