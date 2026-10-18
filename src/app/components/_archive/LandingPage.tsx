export default function LandingPage() {
	return (
		<main className="w-full min-h-screen flex flex-col items-center justify-center px-6">
			<section className="max-w-4xl text-center space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Emma</h1>

				<p className="text-lg md:text-xl text-gray-600">
					Fullstack Web Developer focused on building clean,
					functional, and user-centered web applications.
				</p>

				<div className="flex gap-4 justify-center">
					<button className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition">
						View Projects
					</button>
					<button className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition">
						Contact Me
					</button>
				</div>
			</section>
		</main>
	);
}
