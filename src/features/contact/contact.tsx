import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/Borality",
		icon: Github,
		label: "View my code",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/charles-trangay/",
		icon: Linkedin,
		label: "Connect with me",
	},
	{
		name: "Email",
		href: "mailto:charles-trangay-portfolio-contact.overfeed094@aleeas.com",
		icon: Mail,
		label: "Send a message",
	},
];

export function Contact() {
	return (
		<section className="relative overflow-hidden py-24 md:py-32">
			{/* Background gradient orbs */}
			<div className="pointer-events-none absolute inset-0">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
					className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
				/>
			</div>

			{/* Top divider */}
			<div className="absolute inset-x-0 top-0">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
				</div>
			</div>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="mb-4 text-center md:mb-8"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
						className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
					>
						<Sparkles className="h-3 w-3 animate-pulse" />
						Available for work
					</motion.span>

					<h2
						id="contact-heading"
						className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-14 leading-9 mb-4"
					>
						Let's build something{" "}
						<span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							amazing
						</span>{" "}
						together
					</h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto max-w-2xl text-lg leading-snug text-muted-foreground"
					>
						I'm always excited to connect with fellow developers, designers, and
						anyone with a great idea. Whether it's a full-time role, freelance
						project, or just a chat—reach out!
					</motion.p>
				</motion.div>

				{/* Social Links - Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col items-center gap-8"
				>
					{/* Icon buttons row */}
					<div className="flex items-center gap-4">
						{socialLinks.map((link, index) => (
							<motion.div
								key={link.name}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: 0.4 + index * 0.1,
									ease: [0.21, 0.47, 0.32, 0.98],
								}}
							>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="group h-14 w-14 rounded-full border-border/60 p-0 transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
								>
									<a
										href={link.href}
										target={link.name === "Email" ? undefined : "_blank"}
										rel={
											link.name === "Email" ? undefined : "noopener noreferrer"
										}
										aria-label={link.label}
									>
										<link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
									</a>
								</Button>
							</motion.div>
						))}
					</div>

					{/* Divider with text */}
					<div className="flex items-center gap-4">
						<div className="h-px w-12 bg-border/60" />
						<span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
							or
						</span>
						<div className="h-px w-12 bg-border/60" />
					</div>

					{/* Email CTA button */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<Button asChild size="lg" className="group gap-3 px-8 text-base">
							<a href="mailto:charles-trangay-portfolio-contact.overfeed094@aleeas.com">
								<Mail className="h-4 w-4" />
								Get in touch
								<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>
						</Button>
					</motion.div>

					{/* Subtle hint */}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
						className="text-sm text-muted-foreground/60"
					>
						I typically respond within 24 hours
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
