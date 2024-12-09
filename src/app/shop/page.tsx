"use client";
import React, { useEffect } from "react";
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
import { Product } from "@/itemCountContext";

const products: Product[] = [
	{
		id: 1,
		name: "Throwback Hip Bag",
		href: "#",
		color: "Salmon",
		price: 90.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	},
	{
		id: 2,
		name: "Medium Stuff Satchel",
		href: "#",
		color: "Blue",
		price: 32.0,
		quantity: 1,
		imageSrc:
			"https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		placedInCart: false,
	}
];

const ShopPage = () => {
	const { itemCount, selectedProducts, incrementItem } =
		useContext(ItemCountContext);

	useEffect(() => {
		console.log("Item count: ", itemCount);
	}, [itemCount]);

	useEffect(() => {
		console.log("Items added to cart: ", selectedProducts);
	}, [selectedProducts]);

	return (
		<div className="flex flex-col min-h-screen">
			<CartSheet />
			<div className="items-center justify-center flex flex-wrap gap-4 mt-4 mb-4">
				{products.map((product) => {
					return (
						<Card className="w-60 shadow-lg" key={product.id}>
							<CardHeader>
								<CardTitle>
									<img
										src={`${product.imageSrc}`}
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
									onClick={() => incrementItem(product)}
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
