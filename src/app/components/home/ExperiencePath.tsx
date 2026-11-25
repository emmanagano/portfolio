import { path, next } from "@/data/home";
import { site } from "@/data/site";

const big =
	"whitespace-nowrap text-[clamp(38px,5.4vw,86px)] font-black uppercase leading-[0.85] tracking-[-0.055em]";
const detail = "xp-detail m-0 max-w-[30ch] text-[15px] leading-normal text-taupe";

// Experience as one wrapping run of poster type. The first entry starts open
// so visitors learn that titles hide details; hovering or focusing another
// opens it (always visible on touch). A small + turns into × on hover.
export default function ExperiencePath() {
	const last = path.length - 1;
	return (
		<section id="experience" aria-label="Experience" className="px-6 pt-[10vh]">
			<ol className="xp m-0 flex list-none flex-wrap items-start gap-x-[4vw] gap-y-10 p-0">
				{path.map((step, i) => (
					<li key={step.year} className="flex flex-col gap-2.5">
						<span tabIndex={0} className={`xp-title ${big}`}>
							<span className="xp-year text-taupe">{step.year}</span>{" "}
							{step.label.map((line, j) => (
								<span key={line}>
									{j > 0 && <br />}
									{line}
								</span>
							))}
							<span aria-hidden="true" className="xp-plus">
								{" "}+
							</span>
						</span>
						<p className={detail}>
							{step.link && (
								<>
									<a href={step.link.href} target="_blank" rel="noopener" className="text-ink">
										{step.link.text} ↗
									</a>{" "}
								</>
							)}
							{step.detail}
						</p>
						{i === last && (
							<>
								<a href="#contact" className={`xp-title ${big} mt-7 text-red`}>
									{next.label}
								</a>
								<p className={detail}>{next.detail}</p>
							</>
						)}
					</li>
				))}
			</ol>
			<div className="mt-24 flex justify-center">
				<a
					href={site.resumeUrl}
					target="_blank"
					rel="noreferrer"
					className="cta inline-flex items-baseline font-serif text-[clamp(32px,3.4vw,52px)] italic leading-none text-ink no-underline"
				>
					The full résumé
					<span aria-hidden="true" className="ml-2.5 text-[clamp(24px,2.4vw,36px)] not-italic">
						↗
					</span>
				</a>
			</div>
		</section>
	);
}
