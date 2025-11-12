"use client";
export default function GalleryPage() {
	const images = [
		{
			src: "/images/emma-nagano/emma-nagano-blue-dress-hanoi-night.png",
			alt: "emma-nagano-blue-dress-hanoi-night.png",
		},
		{
			src: "/images/emma-nagano/emma-nagano-blurry-motion-portrait.jpg",
			alt: "emma-nagano-blurry-motion-portrait.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-car-selfie.jpg",
			alt: "emma-nagano-car-selfie.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-city-night-view.jpg",
			alt: "emma-nagano-city-night-view.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-floral-top-portrait.jpg",
			alt: "emma-nagano-floral-top-portrait.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-hand-on-chin-glasses.jpg",
			alt: "emma-nagano-hand-on-chin-glasses.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-headphones-natural-look.jpg",
			alt: "emma-nagano-headphones-natural-look.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-marina-walkway-night.jpg",
			alt: "emma-nagano-marina-walkway-night.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-mirror-gym-selfie.jpg",
			alt: "emma-nagano-mirror-gym-selfie.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-mirror-portrait-bathroom.jpg",
			alt: "emma-nagano-mirror-portrait-bathroom.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-rainbow-road-photo.jpg",
			alt: "emma-nagano-rainbow-road-photo.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-rooftop-photo-night.jpg",
			alt: "emma-nagano-rooftop-photo-night.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-serious-look-glasses.jpg",
			alt: "emma-nagano-serious-look-glasses.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-smiling-glasses.jpg",
			alt: "emma-nagano-smiling-glasses.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-sunglasses-outdoor.jpg",
			alt: "emma-nagano-sunglasses-outdoor.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-talking-expression.jpg",
			alt: "emma-nagano-talking-expression.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-badass.jpg",
			alt: "emma-nagano-badass.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-black-jacket-mirror-selfie.jpg",
			alt: "emma-nagano-black-jacket-mirror-selfie.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-black-tank-top.png",
			alt: "emma-nagano-black-tank-top.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-car-sunglasses-blue-top.jpg",
			alt: "emma-nagano-car-sunglasses-blue-top.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-cinematic-gaze.jpg",
			alt: "emma-nagano-cinematic-gaze.jpg",
		},
		{
			src: "/images/emma-nagano/emma-nagano-dark-eyeshadow.jpg",
			alt: "emma-nagano-dark-eyeshadow.jpg",
		},
	];

	return (
		<main className="max-w-7xl mx-auto p-6">
			<div
				className="masonry"
				style={{
					columnCount: 4,
					columnGap: "1rem",
				}}
			>
				{images.map((img, i) => (
					<img
						key={i}
						src={img.src}
						alt={img.alt}
						loading="lazy"
						style={{
							width: "100%",
							borderRadius: "0.5rem",
							marginBottom: "1rem",
							transition: "transform 0.2s",
							cursor: "pointer",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.transform = "scale(1.03)")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.transform = "scale(1)")
						}
					/>
				))}
			</div>
			<style jsx>{`
				.masonry {
					column-count: 4;
					column-gap: 1rem;
				}
				@media (max-width: 1024px) {
					.masonry {
						column-count: 3;
					}
				}
				@media (max-width: 768px) {
					.masonry {
						column-count: 2;
					}
				}
				@media (max-width: 480px) {
					.masonry {
						column-count: 1;
					}
				}
			`}</style>
		</main>
	);
}
