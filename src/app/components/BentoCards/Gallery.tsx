"use client";

import { useState, useEffect } from "react";

const images = [
	"/images/amia/amia-bedtime-cuddle-pose.jpg",
	"/images/amia/amia-big-yawn-moment.jpg",
	"/images/amia/amia-blue-light-night-photo.jpg",
	"/images/amia/amia-cozy-couch-lounge.jpg",
	"/images/amia/amia-curious-couch-tilt.jpg",
	"/images/amia/amia-green-filter-confused-look.jpg",
	"/images/amia/amia-green-light-side-profile.jpg",
	"/images/amia/amia-happy-chair-sit.jpg",
	"/images/amia/amia-pink-room-portrait.jpg",
	"/images/amia/amia-playing-with-red-toy.jpg",
	"/images/amia/amia-red-filter-goofy-face.jpg",
	"/images/amia/amia-red-room-sitting-pose.jpg",
	"/images/amia/amia-regal-side-profile.jpg",
	"/images/amia/amia-relaxed-couch-side-eye.jpg",
	"/images/amia/amia-sleepy-couch-closeup.jpg",
	"/images/amia/amia-soft-gaze-pink-room.jpg",
	"/images/amia/amia-sweet-face-front-camera.jpg",
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
			className="relative rounded-3xl overflow-hidden cursor-pointer aspect-square w-full h-full"
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
				className="w-full h-full object-cover transition-all duration-500"
			/>
		</div>
	);
}
