import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type product = {
	name: string;
	image: string;
	price: number;
};

const product1: product = {
	name: "New Balance 550 Shoes",
	image: "/shoes1.jpg",
	price: 109.99,
};

const ShopPage = () => {
	const products: product[] = [
		product1,
		product1,
		product1,
		product1,
		product1,
		product1,
		product1,
		product1,
	];

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="grid grid-cols-4 gap-4 px-8 py-8">
				{products.map((product) => {
					return (
						<Card className="w-60 shadow-lg">
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
								<button className="rounded-md border-2 border-black px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-bold">
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
