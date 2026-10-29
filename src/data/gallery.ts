const photo = (file: string, alt: string) => ({
	src: `/images/emma-nagano/${file}`,
	alt,
});

export const gallery = [
	photo("emma-nagano-blue-dress-hanoi-night.png", "Emma in a blue dress on a night street in Hanoi"),
	photo("emma-nagano-blurry-motion-portrait.jpg", "Motion-blurred portrait of Emma"),
	photo("emma-nagano-car-selfie.jpg", "Emma taking a selfie in a car"),
	photo("emma-nagano-city-night-view.jpg", "Emma in front of a city skyline at night"),
	photo("emma-nagano-floral-top-portrait.jpg", "Portrait of Emma in a floral top"),
	photo("emma-nagano-hand-on-chin-glasses.jpg", "Emma in glasses, resting her chin on her hand"),
	photo("emma-nagano-headphones-natural-look.jpg", "Emma wearing headphones"),
	photo("emma-nagano-marina-walkway-night.jpg", "Emma on a marina walkway at night"),
	photo("emma-nagano-mirror-gym-selfie.jpg", "Mirror selfie of Emma at the gym"),
	photo("emma-nagano-mirror-portrait-bathroom.jpg", "Mirror portrait of Emma"),
	photo("emma-nagano-rainbow-road-photo.jpg", "Emma on a rainbow-painted road"),
	photo("emma-nagano-rooftop-photo-night.jpg", "Emma on a rooftop at night"),
	photo("emma-nagano-serious-look-glasses.jpg", "Emma in glasses with a serious expression"),
	photo("emma-nagano-smiling-glasses.jpg", "Emma smiling in glasses"),
	photo("emma-nagano-sunglasses-outdoor.jpg", "Emma wearing sunglasses outdoors"),
	photo("emma-nagano-talking-expression.jpg", "Emma mid-sentence"),
	photo("emma-nagano-badass.jpg", "Emma striking a confident pose"),
	photo("emma-nagano-black-jacket-mirror-selfie.jpg", "Mirror selfie of Emma in a black jacket"),
	photo("emma-nagano-black-tank-top.png", "Emma in a black tank top"),
	photo("emma-nagano-car-sunglasses-blue-top.jpg", "Emma in sunglasses and a blue top in a car"),
	photo("emma-nagano-cinematic-gaze.jpg", "Cinematic portrait of Emma looking away"),
	photo("emma-nagano-dark-eyeshadow.jpg", "Close-up of Emma with dark eyeshadow"),
];
