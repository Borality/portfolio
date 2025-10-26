import { ArrowLeft, Home, Search } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const GRID_ITEMS = Array.from({ length: 9 }, (_, i) => `grid-item-${i}`);

export function NotFound() {
	return (
		<main className="flex min-h-screen items-center justify-center px-4 py-16">
			<div className="mx-auto max-w-2xl text-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="mb-8 flex items-center justify-center gap-4">
						<motion.div
							animate={{
								rotate: [0, 10, -10, 10, 0],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								repeatDelay: 3,
							}}
						>
							<Search className="size-16 text-muted-foreground/50" />
						</motion.div>
					</div>

					<motion.h1
						className="mb-4 text-8xl font-bold tracking-tight"
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
					>
						404
					</motion.h1>

					<motion.h2
						className="mb-4 text-3xl font-semibold tracking-tight"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						Page Not Found
					</motion.h2>

					<motion.p
						className="mb-8 text-lg text-muted-foreground"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						Oops! The page you're looking for seems to have wandered off into
						the digital void. Let's get you back on track.
					</motion.p>

					<motion.div
						className="flex flex-col gap-4 sm:flex-row sm:justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						<Link
							to="/"
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
						>
							<Home className="size-5" />
							Go Home
						</Link>
						<button
							type="button"
							onClick={() => window.history.back()}
							className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
						>
							<ArrowLeft className="size-5" />
							Go Back
						</button>
					</motion.div>
				</motion.div>

				<motion.div
					className="mt-16 grid grid-cols-3 gap-4 opacity-20"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.2 }}
					transition={{ delay: 1 }}
				>
					{GRID_ITEMS.map((id, i) => (
						<motion.div
							key={id}
							className="aspect-square rounded-lg bg-muted"
							animate={{
								opacity: [0.2, 0.5, 0.2],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								delay: i * 0.2,
							}}
						/>
					))}
				</motion.div>
			</div>
		</main>
	);
}
