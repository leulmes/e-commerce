import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col text-white">
			<Navbar />
			<div className="flex flex-col items-center text-black h-screen">
				<Carousel className="w-full max-w-xs">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<span className="text-4xl font-semibold">
												{index + 1}
											</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<p>Hello</p>
				<p>Stan</p>
			</div>
			<Footer />
		</div>
	);
}
