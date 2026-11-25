"use client";

import { useState } from "react";
import { work } from "@/data/home";

// Red index list (ffforum style). Hovering or focusing a row opens it in place
// to show one screenshot; leaving closes it. The whole section is set in a
// terminal mono over faint red scanlines and ink washes.
export default function WorkIndex() {
	const [open, setOpen] = useState(-1);

	return (
		<section id="work" aria-label="Selected work" className="work-room mt-[22vh] px-6 py-[12vh] font-mono-cyber tracking-[0.02em] text-red">
			<div className="mx-auto max-w-[760px]">
				<p className="m-0 mb-10 max-w-[34ch] text-[15px] leading-[1.7] tracking-[0.03em]">{work.intro}</p>
				<ol className="m-0 list-none border-b border-red-hair p-0">
					{work.projects.map((p, i) => {
						const isOpen = open === i;
						return (
							<li
								key={p.title}
								onMouseEnter={() => setOpen(i)}
								onMouseLeave={() => setOpen(-1)}
								className="border-t border-red-hair"
							>
								<a
									href={p.href}
									target="_blank"
									rel="noopener"
									onFocus={() => setOpen(i)}
									className="grid grid-cols-[60px_1fr] items-baseline gap-3 py-4 text-red no-underline"
								>
									<span className="text-[13px] tracking-[0.04em] opacity-75">[0{i + 1}]</span>
									<span className="flex items-baseline justify-between gap-6 text-[15px] leading-[1.4] tracking-[0.03em] max-sm:flex-col max-sm:gap-1">
										<span>
											{p.title}
											<span className="sr-only"> (opens the live site)</span>
										</span>
										<span className="text-right max-sm:text-left">
											{p.note}
											<span aria-hidden="true" className="ml-2.5 inline-block w-[1em] text-center opacity-55">
												{isOpen ? "−" : "+"}
											</span>
										</span>
									</span>
								</a>
								<div className={`work-panel pb-[26px] pl-[72px] pt-0.5 max-sm:pl-0 ${isOpen ? "is-open" : ""}`}>
									<figure className="m-0 w-[min(52%,400px)] max-sm:w-full">
										<a
											href={p.href}
											target="_blank"
											rel="noopener"
											tabIndex={-1}
											className="work-shot block aspect-video overflow-hidden shadow-[0_0_0_1px_var(--red)]"
										>
											<img src={p.image} alt={p.alt} style={{ objectPosition: p.position }} className="block h-full w-full object-cover" />
										</a>
										<figcaption className="mt-2.5 text-lg leading-none">
											<a href={p.href} target="_blank" rel="noopener" aria-label={`Visit ${p.title}`} className="text-red no-underline">
												↗
											</a>
										</figcaption>
									</figure>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
