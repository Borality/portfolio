import { FolderKanban, Home, Mail } from "lucide-react";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
	{ name: "Home", href: "#hero", icon: Home },
	{ name: "Projects", href: "#projects", icon: FolderKanban },
	{ name: "Contact", href: "#contact", icon: Mail },
];

export const Header = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header>
			<nav className="fixed z-20 w-full px-2">
				<div
					className={cn(
						"mx-auto mt-2 max-w-6xl px-4 transition-all duration-300 lg:px-12",
						isScrolled &&
							"bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
					)}
				>
					<div className="flex items-center justify-between py-3 lg:py-4">
						{/* Logo */}
						<a
							href="/"
							aria-label="home"
							className="flex items-center space-x-2"
						>
							<img
								width="40"
								height="40"
								src="/logo.png"
								alt="Logo"
								className="w-7 rounded-full md:w-10"
							/>
						</a>

						{/* Desktop nav - text links (centered) */}
						<ul className="hidden gap-8 text-sm lg:flex">
							{menuItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="text-muted-foreground hover:text-accent-foreground block duration-150"
									>
										<span>{item.name}</span>
									</a>
								</li>
							))}
						</ul>

						{/* Mobile nav - icon links (centered) */}
						<div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 lg:hidden">
							{menuItems.map((item) => (
								<Button
									key={item.name}
									asChild
									variant="ghost"
									size="icon"
									className="h-9 w-9"
								>
									<a href={item.href} aria-label={item.name}>
										<item.icon className="h-5 w-5" />
									</a>
								</Button>
							))}
						</div>

						{/* Mobile dark mode toggle (right) */}
						<div className="lg:hidden">
							<ModeToggle />
						</div>

						{/* Desktop dark mode toggle */}
						<div className="hidden lg:block">
							<ModeToggle />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
