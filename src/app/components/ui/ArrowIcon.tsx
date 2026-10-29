// Diagonal "external / go" arrow. Animate it via the parent's `group` hover.
export default function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2.25}
				d="M7 17L17 7M9 7h8v8"
			/>
		</svg>
	);
}
