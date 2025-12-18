import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectList } from "@/features/projects/ProjectList";

export function Projects() {
	return (
		<section className="relative min-h-screen py-24 md:py-32">
			{/* Top divider */}
			<div className="absolute inset-x-0 top-0">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
				</div>
			</div>

			{/* Background accent */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				{/* Header */}
				<motion.header
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mb-16 text-center md:mb-20"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
						className="md:mb-4 mb-2 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
					>
						Portfolio
					</motion.span>

					<h2
						id="projects-heading"
						className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-8 leading-3 md:mb-8 mb-6"
					>
						Featured{" "}
						<span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Projects
						</span>
					</h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
					>
						A showcase of applications I've built with passion—each one
						reflecting my commitment to clean code, thoughtful design, and great
						user experiences.
					</motion.p>
				</motion.header>

				{/* Projects Grid */}
				<ProjectList projects={projects} />
			</div>

			{/* Bottom divider */}
			<div className="absolute inset-x-0 bottom-0">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
				</div>
			</div>
		</section>
	);
}
