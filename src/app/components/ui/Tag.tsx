export default function Tag({ children }: { children: React.ReactNode }) {
	return (
		<li className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs font-medium text-foreground">
			{children}
		</li>
	);
}
