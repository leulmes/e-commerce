import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
	return (
		<div className="flex flex-col text-white">
			<Navbar />
			<div className="flex flex-col items-center text-black ">
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />	
			</div>
			<Footer />
		</div>
	);
}
