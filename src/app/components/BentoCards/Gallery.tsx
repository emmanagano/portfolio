"use client";

import { useState, useEffect } from "react";

const images = [
	"/images/emma-nagano/emma-nagano-black-tank-top.png",
	"/images/emma-nagano/emma-nagano-blue-dress-hanoi-night.png",
	"/images/emma-nagano/emma-nagano-blurry-motion-portrait.jpg",
	"/images/emma-nagano/emma-nagano-car-selfie.jpg",
	"/images/emma-nagano/emma-nagano-car-sunglasses-blue-top.jpg",
	"/images/emma-nagano/emma-nagano-cinematic-gaze.jpg",
	"/images/emma-nagano/emma-nagano-city-night-view.jpg",
	"/images/emma-nagano/emma-nagano-dark-eyeshadow.jpg",
	"/images/emma-nagano/emma-nagano-floral-top-portrait.jpg",
	"/images/emma-nagano/emma-nagano-hand-on-chin-glasses.jpg",
	"/images/emma-nagano/emma-nagano-headphones-natural-look.jpg",
	"/images/emma-nagano/emma-nagano-marina-walkway-night.jpg",
	"/images/emma-nagano/emma-nagano-mirror-gym-selfie.jpg",
	"/images/emma-nagano/emma-nagano-mirror-portrait-bathroom.jpg",
	"/images/emma-nagano/emma-nagano-rainbow-road-photo.jpg",
	"/images/emma-nagano/emma-nagano-rooftop-photo-night.jpg",
	"/images/emma-nagano/emma-nagano-serious-look-glasses.jpg",
	"/images/emma-nagano/emma-nagano-smiling-glasses.jpg",
	"/images/emma-nagano/emma-nagano-badass.jpg",
	"/images/emma-nagano/emma-nagano-sunglasses-outdoor.jpg",
	"/images/emma-nagano/emma-nagano-talking-expression.jpg",
];

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [hovering, setHovering] = useState(false);

	// Load saved index on mount
	useEffect(() => {
		const saved = localStorage.getItem("galleryIndex");
		if (saved) setIndex(Number(saved));
	}, []);

	useEffect(() => {
		if (!hovering) return;
		const interval = setInterval(() => {
			setIndex((prev) => {
				const next = (prev + 1) % images.length;
				localStorage.setItem("galleryIndex", String(next));
				return next;
			});
		}, 900);

		return () => clearInterval(interval);
	}, [hovering]);

	return (
		<div
			className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onClick={() => {
				setHovering((prev) => !prev);
				localStorage.setItem("galleryIndex", String(index));
			}}
		>
			<img
				src={images[index]}
				alt="Emma Nagano"
				className="object-contain w-full h-full transition-all duration-500"
			/>
		</div>
	);
}
