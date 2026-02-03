"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import HeroGradientBG from "@/public/hero-bg.svg";
import HeroMainImg from "@/public/hero-main.svg";
import CommonImage from "./CommonImage";
import { easeOut } from "@/lib/animationVariants";

const t = (delay, y = 24) => ({
	initial: { opacity: 0, y },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.8, delay, ease: easeOut },
});

export default function HeroSection() {
	const ref = useRef(null);

	return (
		<motion.section
			ref={ref}
			id="home"
			className="relative bg-background min-h-screen flex flex-col overflow-hidden pt-0"
		>
			{/* Orange gradient - right half, from very top */}
			<div
				className="absolute top-0 left-1/2 right-0 bottom-0 w-1/2 min-h-screen pointer-events-none overflow-hidden"
				aria-hidden
			>
				<CommonImage
					src={HeroGradientBG.src || HeroGradientBG}
					alt=""
					className="object-contain object-left"
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col min-h-screen pt-6 pb-8 lg:pt-8 lg:pb-10">
				<div className="relative flex-1 flex flex-col gap-4 lg:gap-12 items-start justify-center">
					<div className="w-full top-0 flex justify-between items-center absolute">
						<span className="flex items-baseline text-primary text-4xl font-bold">
							Forbase{" "}
							<span className="w-2 h-2 rounded-full bg-secondary ml-1"></span>
						</span>
						<button className="h-[46px] w-[163px] rounded-full bg-white font-medium text-primary flex items-center justify-center gap-3">
							Get in Touch
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.0349998 9.348L1.305 10.74L7.879 4.679C7.243 6.979 7.854 9.432 9.285 11.506L10.744 10.175C8.797 7.436 8.738 3.803 11.303 1.462L10.186 0.238C7.621 2.579 4.009 2.189 1.458 0L0 1.331C1.934 2.945 4.322 3.777 6.67 3.355L0.0349998 9.348Z"
									fill="#001639"
								/>
							</svg>
						</button>
					</div>
					<motion.div {...t(0.15)}>
						<motion.h1
							{...t(0.3)}
							className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[60px] md:leading-[76px] lg:leading-[90px] text-primary mt-20 lg:mt-24"
						>
							Forbase
							<br />
							<span className="text-primary">Solutions for</span>
							<br />
							<span className="text-primary">Business</span>
							<span className="text-secondary">.</span>
						</motion.h1>
					</motion.div>

					<motion.div
						{...t(0.2)}
						className="w-full flex flex-col-reverse md:flex-row md:justify-between items-center gap-6"
					>
						<motion.div
							{...t(0.5)}
							className="flex items-center gap-3 mb-8 md:mb-0"
						>
							<span className="w-0.5 h-6 bg-secondary shrink-0" aria-hidden />
							<p className="text-lg text-primary/60 font-medium">SCROLL</p>
						</motion.div>
						<motion.p
							{...t(0.5)}
							className="text-lg text-primary mb-8 max-w-md leading-relaxed"
						>
							Identify the key barriers that prevent your business from reaching
							its full potential. Addressing these issues can transform your
							operations.
						</motion.p>
					</motion.div>
				</div>

				<motion.div {...t(0.4, 32)}>
					<div className="rounded-3xl overflow-hidden shadow-2xl">
						<CommonImage
							src={HeroMainImg.src || HeroMainImg}
							alt="Team collaboration"
							className="w-full object-cover"
						/>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
